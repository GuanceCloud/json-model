package v1alpha1

type Dashboard struct {
	DashboardBindSet   []any     `json:"dashboardBindSet"`
	DashboardExtend    any       `json:"dashboardExtend"`
	DashboardMapping   []any     `json:"dashboardMapping"`
	DashboardOwnerType string    `json:"dashboardOwnerType,omitempty"`
	DashboardType      string    `json:"dashboardType"`
	IconSet            *IconSet  `json:"iconSet,omitempty"`
	Main               Main      `json:"main"`
	Summary            string    `json:"summary"`
	TagInfo            []TagInfo `json:"tagInfo"`
	Tags               []any     `json:"tags"`
	Thumbnail          string    `json:"thumbnail"`
	Title              string    `json:"title"`
}

type IconSet struct {
	Icon string  `json:"icon,omitempty"`
	URL  *string `json:"url"`
}

type TagInfo struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type Main struct {
	Charts []Chart  `json:"charts"`
	Groups []string `json:"groups"`
	Type   string   `json:"type"`
	Vars   []Var    `json:"vars"`
}

type Var struct {
	Code             string        `json:"code"`
	Datasource       string        `json:"datasource"`
	Definition       VarDefinition `json:"definition"`
	Hide             int           `json:"hide"`
	IsHiddenAsterisk int           `json:"isHiddenAsterisk,omitempty"`
	Name             string        `json:"name"`
	Seq              int           `json:"seq"`
	Type             string        `json:"type"`
	ValueSort        string        `json:"valueSort"`
}

type VarDefinition struct {
	DefaultVal *VarDefaultVal `json:"defaultVal,omitempty"`
	Field      string         `json:"field"`
	Metric     string         `json:"metric"`
	Object     string         `json:"object"`
	Tag        string         `json:"tag"`
	Value      string         `json:"value"`
}

type VarDefaultVal struct {
	Label string `json:"label"`
	Value string `json:"value"`
}

type Chart struct {
	Extend  Extend     `json:"extend"`
	Group   ChartGroup `json:"group"`
	Name    string     `json:"name"`
	Pos     ChartPos   `json:"pos"`
	Queries []Query    `json:"queries"`
	Type    string     `json:"type"`
}

type ChartPos struct {
	H int     `json:"h"`
	I any     `json:"i,omitempty"`
	W int     `json:"w"`
	X int     `json:"x"`
	Y float64 `json:"y"`
}

type ChartGroup struct {
	Name *string `json:"name"`
}

type Query struct {
	Actions        []QueryAction `json:"actions,omitempty"`
	ChartGroupUuid string        `json:"chartGroupUUID,omitempty"`
	Checked        bool          `json:"checked,omitempty"`
	Color          string        `json:"color"`
	CreateAt       int           `json:"createAt,omitempty"`
	Creator        string        `json:"creator,omitempty"`
	DashboardUuid  string        `json:"dashboardUUID,omitempty"`
	Datasource     string        `json:"datasource,omitempty"`
	DeleteAt       int           `json:"deleteAt,omitempty"`
	Disabled       bool          `json:"disabled"`
	Extend         *QueryExtend  `json:"extend,omitempty"`
	FixedOptions   *FixedOptions `json:"fixedOptions,omitempty"`
	HeaderOptions  any           `json:"headerOptions,omitempty"`
	ID             int           `json:"id,omitempty"`
	IsInnerHeader  bool          `json:"isInnerHeader"`
	IsShowFixed    bool          `json:"isShowFixed,omitempty"`
	Name           string        `json:"name"`
	NoTimeRange    bool          `json:"noTimeRange"`
	Pos            *ChartPos     `json:"pos,omitempty"`
	Qtype          string        `json:"qtype,omitempty"`
	Queries        []QueryItem   `json:"queries,omitempty"`
	Query          *SingleQuery  `json:"query,omitempty"`
	Status         int           `json:"status,omitempty"`
	Type           string        `json:"type,omitempty"`
	Unit           string        `json:"unit"`
	UpdateAt       int           `json:"updateAt,omitempty"`
	Updator        string        `json:"updator,omitempty"`
	Uuid           string        `json:"uuid,omitempty"`
	WorkspaceUuid  string        `json:"workspaceUUID,omitempty"`
}

type SingleQuery struct {
	Alias                string             `json:"alias"`
	Children             []SingleQuery      `json:"children"`
	Code                 string             `json:"code,omitempty"`
	Content              string             `json:"content,omitempty"`
	DataSource           string             `json:"dataSource"`
	DataSourceFunc       string             `json:"dataSourceFunc,omitempty"`
	Density              string             `json:"density,omitempty"`
	DisableMultipleField bool               `json:"disableMultipleField"`
	Expression           string             `json:"expression"`
	Field                *string            `json:"field"`
	FieldFunc            string             `json:"fieldFunc"`
	FieldType            string             `json:"fieldType"`
	Fields               []SingleQueryField `json:"fields,omitempty"`
	Fill                 *string            `json:"fill"`
	FillNum              *int               `json:"fillNum"`
	Filter               *SingleQueryFilter `json:"filter,omitempty"`
	Filters              []QueryFilter      `json:"filters"`
	FuncList             []*string          `json:"funcList"`
	GroupBy              []string           `json:"groupBy"`
	GroupByTime          string             `json:"groupByTime"`
	IndexFilter          string             `json:"indexFilter"`
	LabelOp              string             `json:"labelOp"`
	Measurements         []string           `json:"measurements,omitempty"`
	Namespace            string             `json:"namespace"`
	Q                    string             `json:"q"`
	QueryFuncs           []SingleQueryFunc  `json:"queryFuncs"`
	Search               string             `json:"search"`
	TransformFuncs       []any              `json:"transformFuncs"`
	Type                 string             `json:"type,omitempty"`
	WithLabels           []any              `json:"withLabels"`
}

type SingleQueryField struct {
	Alias       string           `json:"alias,omitempty"`
	Args        []SingleQueryArg `json:"args,omitempty"`
	Field       string           `json:"field,omitempty"`
	FuncName    string           `json:"funcName,omitempty"`
	Fx          string           `json:"fx,omitempty"`
	Hide        bool             `json:"hide,omitempty"`
	IsEditAlias bool             `json:"isEditAlias"`
}

type SingleQueryArg struct {
	Name string `json:"name"`
}

type SingleQueryFilter struct {
	Tags []SingleQueryFilterTag `json:"tags"`
}

type SingleQueryFunc struct {
	Args []string `json:"args"`
	Name string   `json:"name"`
}

type SingleQueryFilterTag struct {
	Condition string `json:"condition"`
	Name      string `json:"name"`
	Operation string `json:"operation"`
	Value     string `json:"value"`
}

type QueryItem struct {
	Checked    bool         `json:"checked,omitempty"`
	Color      string       `json:"color"`
	Datasource string       `json:"datasource"`
	Name       string       `json:"name"`
	Qtype      string       `json:"qtype"`
	Query      ConcretQuery `json:"query"`
	Type       string       `json:"type"`
	Unit       string       `json:"unit"`
	Uuid       string       `json:"uuid,omitempty"`
}

type ConcretQuery struct {
	Alias       string         `json:"alias"`
	Children    []ConcretQuery `json:"children,omitempty"`
	Code        string         `json:"code"`
	DataSource  string         `json:"dataSource,omitempty"`
	Expression  string         `json:"expression,omitempty"`
	Field       string         `json:"field,omitempty"`
	FieldFunc   string         `json:"fieldFunc,omitempty"`
	FieldType   string         `json:"fieldType,omitempty"`
	Fill        *string        `json:"fill"`
	FillNum     any            `json:"fillNum,omitempty"`
	Filters     []QueryFilter  `json:"filters"`
	FuncList    []string       `json:"funcList"`
	GroupBy     []string       `json:"groupBy,omitempty"`
	GroupByTime string         `json:"groupByTime"`
	Namespace   string         `json:"namespace,omitempty"`
	Q           string         `json:"q"`
	QueryFuncs  []any          `json:"queryFuncs"`
	Type        string         `json:"type"`
	WithLabels  []any          `json:"withLabels"`
}

type QueryFilter struct {
	ID    string `json:"id"`
	Logic string `json:"logic"`
	Name  string `json:"name"`
	Op    string `json:"op"`
	Type  string `json:"type"`
	Value any    `json:"value"`
}

type FixedOptions struct {
	GroupKey string              `json:"groupKey"`
	Options  FixedOptionsOptions `json:"options"`
}

type FixedOptionsOptions struct {
	Extend    FixedOptionsExtend      `json:"extend"`
	Name      string                  `json:"name"`
	QueryList []FixedOptionsQueryList `json:"queryList"`
	Type      string                  `json:"type"`
}

type FixedOptionsExtend struct {
	FixedTime any                  `json:"fixedTime"`
	Settings  FixedOptionsSettings `json:"settings"`
}

type FixedOptionsSettings struct {
	ColorLevel               int     `json:"colorLevel"`
	Colors                   []any   `json:"colors"`
	CurrentChartType         string  `json:"currentChartType,omitempty"`
	FixedTime                string  `json:"fixedTime"`
	IsTimeInterval           bool    `json:"isTimeInterval"`
	IsVariable               bool    `json:"isVariable"`
	LevelArr                 []Level `json:"levelArr"`
	Levels                   []any   `json:"levels"`
	MainMeasurementQueryCode string  `json:"mainMeasurementQueryCode"`
	ProvinceKey              string  `json:"provinceKey"`
	RangeColorKey            string  `json:"rangeColorKey"`
	ShowFieldMapping         bool    `json:"showFieldMapping"`
	ShowTitle                bool    `json:"showTitle"`
	TimeInterval             string  `json:"timeInterval"`
	TitleDesc                string  `json:"titleDesc"`
	Units                    []Unit  `json:"units"`
	VariableCode             string  `json:"variableCode"`
}

type Level struct {
	Color string `json:"color"`
	Max   int    `json:"max,omitempty"`
	Min   int    `json:"min"`
}

type Unit struct {
	Key   string   `json:"key"`
	Name  string   `json:"name"`
	Unit  string   `json:"unit"`
	Units []string `json:"units"`
}

type FixedOptionsQueryList struct {
	Color      string `json:"color"`
	Datasource string `json:"datasource"`
	Name       string `json:"name"`
	Qtype      string `json:"qtype"`
	Unit       string `json:"unit"`
}

type QueryAction struct {
	Disabled  bool   `json:"disabled"`
	GroupUuid string `json:"groupUUID,omitempty"`
	Label     string `json:"label"`
	Type      string `json:"type"`
	Uuid      string `json:"uuid"`
	Value     string `json:"value"`
}

type Extend struct {
	FixedGroupByTime *int      `json:"fixedGroupByTime"`
	FixedTime        any       `json:"fixedTime,omitempty"`
	IsCombineChart   bool      `json:"isCombineChart,omitempty"`
	IsRefresh        bool      `json:"isRefresh"`
	Links            []Link    `json:"links"`
	Settings         *Settings `json:"settings,omitempty"`
}

type Link struct {
	Alias string `json:"alias,omitempty"`
	Open  string `json:"open,omitempty"`
	Show  bool   `json:"show"`
	Type  string `json:"type,omitempty"`
	URL   string `json:"url"`
}

type Settings struct {
	AddColumns               []Column          `json:"addColumns,omitempty"`
	Alias                    []Alias           `json:"alias"`
	BackgroundStyle          *BackgroundStyle  `json:"backgroundStyle,omitempty"`
	Bar                      *Bar              `json:"bar,omitempty"`
	BgColor                  string            `json:"bgColor"`
	ChartCombineDefaultColor string            `json:"chartCombineDefaultColor,omitempty"`
	ChartType                string            `json:"chartType,omitempty"`
	Color                    string            `json:"color"`
	ColorLevel               int               `json:"colorLevel,omitempty"`
	Colors                   []ColorItem       `json:"colors"`
	CompareChartType         string            `json:"compareChartType"`
	CompareColors            *CompareColor     `json:"compareColors,omitempty"`
	CompareColorsDark        *CompareColor     `json:"compareColorsDark,omitempty"`
	CompareColorsLight       *CompareColor     `json:"compareColorsLight,omitempty"`
	CompareTitle             string            `json:"compareTitle"`
	CompareType              any               `json:"compareType,omitempty"`
	Compares                 []Compare         `json:"compares"`
	CurrentChartType         string            `json:"currentChartType,omitempty"`
	Density                  string            `json:"density,omitempty"`
	Direction                string            `json:"direction,omitempty"`
	Downsample               string            `json:"downsample,omitempty"`
	FixedTime                string            `json:"fixedTime"`
	FontColor                string            `json:"fontColor"`
	InColumns                []InColumn        `json:"inColumns,omitempty"`
	Index                    string            `json:"index,omitempty"`
	IsPercent                bool              `json:"isPercent"`
	IsTimeInterval           bool              `json:"isTimeInterval"`
	IsVariable               bool              `json:"isVariable"`
	LegendPostion            string            `json:"legendPostion,omitempty"`
	LegendValues             any               `json:"legendValues,omitempty"`
	LevelArr                 []Level           `json:"levelArr"`
	Levels                   []LevelItem       `json:"levels"`
	LineColor                string            `json:"lineColor,omitempty"`
	LockTime                 string            `json:"lockTime"`
	MainMeasurement          string            `json:"mainMeasurement"`
	MainMeasurementLimit     int               `json:"mainMeasurementLimit,omitempty"`
	MainMeasurementQueryCode string            `json:"mainMeasurementQueryCode,omitempty"`
	MainMeasurementSort      string            `json:"mainMeasurementSort,omitempty"`
	Mappings                 []Mapping         `json:"mappings"`
	Mark                     *Mark             `json:"mark,omitempty"`
	Max                      int               `json:"max,omitempty"`
	Min                      int               `json:"min,omitempty"`
	OnlyShowGroupName        bool              `json:"onlyShowGroupName"`
	OpenCompare              bool              `json:"openCompare"`
	OpenStack                bool              `json:"openStack"`
	OtherColor               string            `json:"otherColor,omitempty"`
	PageSize                 int               `json:"pageSize,omitempty"`
	Precision                string            `json:"precision,omitempty"`
	ProvinceKey              string            `json:"provinceKey"`
	QueryMode                string            `json:"queryMode,omitempty"`
	RangeColor               string            `json:"rangeColor"`
	RangeColorKey            string            `json:"rangeColorKey"`
	ShowFieldMapping         bool              `json:"showFieldMapping"`
	ShowLegend               bool              `json:"showLegend"`
	ShowLine                 bool              `json:"showLine"`
	ShowLineAxis             bool              `json:"showLineAxis"`
	ShowTableHead            bool              `json:"showTableHead,omitempty"`
	ShowTitle                bool              `json:"showTitle"`
	ShowTopList              bool              `json:"showTopList,omitempty"`
	ShowTopSize              any               `json:"showTopSize,omitempty"`
	ShowTopWithMetric        string            `json:"showTopWithMetric"`
	Slimit                   int               `json:"slimit,omitempty"`
	StackContent             string            `json:"stackContent,omitempty"`
	StackType                string            `json:"stackType,omitempty"`
	Table                    *Table            `json:"table,omitempty"`
	TableSortMetricName      string            `json:"tableSortMetricName"`
	TableSortType            string            `json:"tableSortType,omitempty"`
	TimeInterval             any               `json:"timeInterval,omitempty"`
	TitleDesc                string            `json:"titleDesc"`
	TopSize                  int               `json:"topSize,omitempty"`
	Type                     string            `json:"type,omitempty"`
	Units                    []Unit            `json:"units"`
	URL                      string            `json:"url,omitempty"`
	ValColorMappings         []ValColorMapping `json:"valColorMappings"`
	ValMappings              []ValMapping      `json:"valMappings"`
	VariableCode             string            `json:"variableCode"`
	XAxisShowType            string            `json:"xAxisShowType,omitempty"`
	YAxixMaxVal              any               `json:"yAxixMaxVal,omitempty"`
	YAxixMinVal              any               `json:"yAxixMinVal,omitempty"`
}

type Table struct {
	QueryMode string `json:"queryMode"`
}

type Mark struct {
	Axis string `json:"axis"`
	Data []any  `json:"data"`
	Type string `json:"type"`
}

type Bar struct {
	Direction     string `json:"direction"`
	XAxisShowType string `json:"xAxisShowType"`
}

type BackgroundStyle struct {
	BackgroundSize string `json:"background-size"`
}

type ColorTag struct {
	ErrorSource   string `json:"error_source,omitempty"`
	Host          string `json:"host,omitempty"`
	Hostname      string `json:"hostname,omitempty"`
	ViewPathGroup string `json:"view_path_group,omitempty"`
}

type ColorItem struct {
	Color string    `json:"color"`
	Key   string    `json:"key"`
	Name  string    `json:"name"`
	Tags  *ColorTag `json:"tags,omitempty"`
}

type Compare struct {
	Alia  string `json:"alia"`
	Label string `json:"label"`
	Value string `json:"value"`
}

type InColumn struct {
	CellRenderer          string   `json:"cellRenderer,omitempty"`
	CellRendererFramework string   `json:"cellRendererFramework,omitempty"`
	Field                 string   `json:"field"`
	FilterParams          struct{} `json:"filterParams"`
	HeaderName            string   `json:"headerName"`
	ShowTooltip           bool     `json:"showTooltip"`
}

type Mapping struct {
	MappingVal  string   `json:"mappingVal"`
	Operation   string   `json:"operation"`
	OriginalVal []string `json:"originalVal"`
}

type ValMapping struct {
	Field       string   `json:"field"`
	MappingVal  string   `json:"mappingVal"`
	Operation   string   `json:"operation"`
	OriginalVal []string `json:"originalVal"`
}

type Alias struct {
	Alias string `json:"alias"`
	Key   string `json:"key"`
	Name  string `json:"name"`
}

type Column struct {
	Field      string `json:"field"`
	HeaderName string `json:"headerName,omitempty"`
	Hide       bool   `json:"hide,omitempty"`
}

type LevelItem struct {
	BgColor   string `json:"bgColor"`
	FontColor string `json:"fontColor"`
	LineColor string `json:"lineColor"`
	Operation string `json:"operation,omitempty"`
	Title     string `json:"title"`
	Value     any    `json:"value"`
}

type QueryExtend struct {
	FixedGroupByTime any            `json:"fixedGroupByTime,omitempty"`
	FixedTime        string         `json:"fixedTime"`
	IsCombineChart   bool           `json:"isCombineChart,omitempty"`
	IsRefresh        bool           `json:"isRefresh"`
	Links            []Link         `json:"links,omitempty"`
	Settings         *QuerySettings `json:"settings,omitempty"`
}

type QuerySettings struct {
	Alias                    []any             `json:"alias"`
	ColorLevel               int               `json:"colorLevel,omitempty"`
	Colors                   []any             `json:"colors"`
	CurrentChartType         string            `json:"currentChartType"`
	FixedTime                string            `json:"fixedTime"`
	IsTimeInterval           bool              `json:"isTimeInterval"`
	IsVariable               bool              `json:"isVariable"`
	LevelArr                 []Level           `json:"levelArr,omitempty"`
	Levels                   []any             `json:"levels"`
	MainMeasurementQueryCode string            `json:"mainMeasurementQueryCode,omitempty"`
	PageSize                 int               `json:"pageSize,omitempty"`
	ProvinceKey              string            `json:"provinceKey,omitempty"`
	QueryMode                string            `json:"queryMode,omitempty"`
	RangeColorKey            string            `json:"rangeColorKey,omitempty"`
	ShowFieldMapping         bool              `json:"showFieldMapping"`
	ShowTitle                bool              `json:"showTitle"`
	ShowTopList              bool              `json:"showTopList"`
	TimeInterval             string            `json:"timeInterval"`
	TitleDesc                string            `json:"titleDesc"`
	Units                    []Unit            `json:"units"`
	ValColorMappings         []ValColorMapping `json:"valColorMappings"`
	ValMappings              []any             `json:"valMappings"`
	VariableCode             string            `json:"variableCode"`
}

type ValColorMapping struct {
	Field     string `json:"field"`
	FontColor string `json:"fontColor"`
	Operation string `json:"operation"`
	Value     []any  `json:"value"`
}

type CompareColor struct {
	DayCompare   string `json:"dayCompare"`
	HourCompare  string `json:"hourCompare"`
	MonthCompare string `json:"monthCompare"`
	WeekCompare  string `json:"weekCompare"`
}
