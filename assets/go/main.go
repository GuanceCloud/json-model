package main

import (
	"bytes"
	"encoding/json"

	"github.com/golang/protobuf/jsonpb"

	v1alpha1Dashboard "github.com/GuanceCloud/json-model/generated/go/dashboard/v1alpha1"
	v1alpha1Monitor "github.com/GuanceCloud/json-model/generated/go/monitor/v1alpha1"
)

func ParseDashboard(content []byte) (*v1alpha1Dashboard.Dashboard, error) {
	dashboard := &v1alpha1Dashboard.Dashboard{}
	if err := json.Unmarshal(content, dashboard); err != nil {
		return nil, err
	}
	return dashboard, nil
}

func ParseMonitor(content []byte) (*v1alpha1Monitor.Monitor, error) {
	monitor := &v1alpha1Monitor.Monitor{}
	if err := jsonpb.Unmarshal(bytes.NewReader(content), monitor); err != nil {
		return nil, err
	}
	return monitor, nil
}
