package main

import (
	_ "embed"
	"fmt"
	"os"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/tidwall/gjson"
)

const (
	MonitorDir   = "../../testdata/monitor"
	DashboardDir = "../../testdata/dashboard"
)

func TestMonitor(t *testing.T) {
	monitorFiles, err := loadJsonFiles(MonitorDir)
	require.NoError(t, err)
	for _, f := range monitorFiles {
		gjson.GetBytes(f.Content, "checkers").ForEach(func(key, value gjson.Result) bool {
			monitor, err := ParseMonitor([]byte(value.Raw))
			require.NoError(t, err, "failed to parse proto file %q: %s", f.Path, err)
			require.NotEmpty(t, monitor)
			return true
		})
	}
}

func TestDashboard(t *testing.T) {
	dashboardFiles, err := loadJsonFiles(DashboardDir)
	require.NoError(t, err)
	for _, f := range dashboardFiles {
		dashboard, err := ParseDashboard(f.Content)
		require.NoError(t, err, "failed to parse proto file %q: %s", f.Path, err)
		require.NotEmpty(t, dashboard)
	}
}

type fileInfo struct {
	Path    string
	Content []byte
}

// loadJsonFiles loads all json files in a directory
func loadJsonFiles(dir string) ([]fileInfo, error) {
	var files []fileInfo
	err := filepath.Walk(dir, func(path string, info os.FileInfo, err error) error {
		// Skip directories
		if info.IsDir() {
			return nil
		}

		// Skip non-json files
		if filepath.Ext(path) != ".json" {
			return nil
		}

		content, err := os.ReadFile(path)
		if err != nil {
			return fmt.Errorf("failed to read file %s: %w", path, err)
		}
		files = append(files, fileInfo{
			Path:    path,
			Content: content,
		})
		return nil
	})
	if err != nil {
		return nil, err
	}
	return files, nil
}
