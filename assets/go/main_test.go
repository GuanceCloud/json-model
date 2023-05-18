package main_test

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"testing"

	"github.com/golang/protobuf/jsonpb"
	"github.com/stretchr/testify/require"
	"github.com/tidwall/gjson"

	monitorv1alpha1 "github.com/GuanceCloud/json-model/generated/go/monitor/v1alpha1"
)

const (
	MonitorDir = "../../testdata/monitor"
)

func TestMonitor(t *testing.T) {
	monitorFiles, err := loadJsonFiles(MonitorDir)
	require.NoError(t, err)
	for _, f := range monitorFiles {
		gjson.GetBytes(f.Content, "checkers").ForEach(func(key, value gjson.Result) bool {
			var monitor monitorv1alpha1.Monitor
			err := jsonpb.Unmarshal(strings.NewReader(value.Raw), &monitor)
			require.NoError(t, err, "failed to parse proto file %q: %s", f.Path, err)
			return true
		})
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
