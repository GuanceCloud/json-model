/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "guance.io.json.dashboard.v1alpha1";

export interface Dashboard {
  dashboardBindSet: Empty[];
  dashboardExtend: Empty | undefined;
  dashboardMapping: Empty[];
  dashboardOwnerType: string;
  dashboardType: string;
  iconSet: IconSet | undefined;
  main: Main | undefined;
  summary: string;
  tagInfo: Taginfo[];
  tags: Empty[];
  thumbnail: string;
  title: string;
}

export interface Empty {
}

export interface IconSet {
  icon: string;
  url: string;
}

export interface Colors {
  color: string;
  key: string;
  name: string;
}

export interface Levels {
  lineColor: string;
  operation: string;
  value: number[];
}

export interface Units {
  key: string;
  name: string;
  unit: string;
  units: string[];
}

export interface Settings {
  chartType: string;
  colors: Colors[];
  compareTitle: string;
  compareType: string;
  currentChartType: string;
  density: string;
  fixedTime: string;
  isPercent: boolean;
  isTimeInterval: boolean;
  levels: Levels[];
  openCompare: boolean;
  openStack: boolean;
  showFieldMapping: boolean;
  showLine: boolean;
  showTitle: boolean;
  stackType: string;
  timeInterval: string;
  titleDesc: string;
  units: Units[];
  xAxisShowType: string;
}

export interface Extend {
  fixedTime: string;
  settings: Settings | undefined;
}

export interface Group {
  name: string;
}

export interface Pos {
  h: number;
  i: string;
  w: number;
  x: number;
  y: number;
}

export interface Filters {
  id: string;
  logic: string;
  name: string;
  op: string;
  type: string;
  value: string;
}

export interface QueryFuncs {
  args: string[];
  name: string;
}

export interface Query {
  alias: string;
  code: string;
  dataSource: string;
  field: string;
  fieldFunc: string;
  fieldType: string;
  fill: string;
  filters: Filters[];
  funcList: string[];
  groupBy: string[];
  groupByTime: string;
  namespace: string;
  q: string;
  queryFuncs: QueryFuncs[];
  type: string;
}

export interface Queries {
  color: string;
  datasource: string;
  name: string;
  qtype: string;
  query: Query | undefined;
  type: string;
  unit: string;
}

export interface Charts {
  extend: Extend | undefined;
  group: Group | undefined;
  name: string;
  pos: Pos | undefined;
  queries: Queries[];
  type: string;
}

export interface Defaultval {
  label: string;
  value: string;
}

export interface Definition {
  defaultVal: Defaultval | undefined;
  field: string;
  metric: string;
  object: string;
  tag: string;
  value: string;
}

export interface Vars {
  code: string;
  datasource: string;
  definition: Definition | undefined;
  hide: number;
  name: string;
  seq: number;
  type: string;
  valueSort: string;
}

export interface Main {
  charts: Charts[];
  groups: string[];
  type: string;
  vars: Vars[];
}

export interface Taginfo {
  id: string;
  name: string;
}

function createBaseDashboard(): Dashboard {
  return {
    dashboardBindSet: [],
    dashboardExtend: undefined,
    dashboardMapping: [],
    dashboardOwnerType: "",
    dashboardType: "",
    iconSet: undefined,
    main: undefined,
    summary: "",
    tagInfo: [],
    tags: [],
    thumbnail: "",
    title: "",
  };
}

export const Dashboard = {
  encode(message: Dashboard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dashboardBindSet) {
      Empty.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.dashboardExtend !== undefined) {
      Empty.encode(message.dashboardExtend, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.dashboardMapping) {
      Empty.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.dashboardOwnerType !== "") {
      writer.uint32(34).string(message.dashboardOwnerType);
    }
    if (message.dashboardType !== "") {
      writer.uint32(42).string(message.dashboardType);
    }
    if (message.iconSet !== undefined) {
      IconSet.encode(message.iconSet, writer.uint32(50).fork()).ldelim();
    }
    if (message.main !== undefined) {
      Main.encode(message.main, writer.uint32(58).fork()).ldelim();
    }
    if (message.summary !== "") {
      writer.uint32(66).string(message.summary);
    }
    for (const v of message.tagInfo) {
      Taginfo.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.tags) {
      Empty.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.thumbnail !== "") {
      writer.uint32(90).string(message.thumbnail);
    }
    if (message.title !== "") {
      writer.uint32(98).string(message.title);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dashboard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDashboard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dashboardBindSet.push(Empty.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dashboardExtend = Empty.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dashboardMapping.push(Empty.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dashboardOwnerType = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.dashboardType = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.iconSet = IconSet.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.main = Main.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.summary = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.tagInfo.push(Taginfo.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.tags.push(Empty.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.thumbnail = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.title = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Dashboard {
    return {
      dashboardBindSet: Array.isArray(object?.dashboardBindSet)
        ? object.dashboardBindSet.map((e: any) => Empty.fromJSON(e))
        : [],
      dashboardExtend: isSet(object.dashboardExtend) ? Empty.fromJSON(object.dashboardExtend) : undefined,
      dashboardMapping: Array.isArray(object?.dashboardMapping)
        ? object.dashboardMapping.map((e: any) => Empty.fromJSON(e))
        : [],
      dashboardOwnerType: isSet(object.dashboardOwnerType) ? String(object.dashboardOwnerType) : "",
      dashboardType: isSet(object.dashboardType) ? String(object.dashboardType) : "",
      iconSet: isSet(object.iconSet) ? IconSet.fromJSON(object.iconSet) : undefined,
      main: isSet(object.main) ? Main.fromJSON(object.main) : undefined,
      summary: isSet(object.summary) ? String(object.summary) : "",
      tagInfo: Array.isArray(object?.tagInfo) ? object.tagInfo.map((e: any) => Taginfo.fromJSON(e)) : [],
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => Empty.fromJSON(e)) : [],
      thumbnail: isSet(object.thumbnail) ? String(object.thumbnail) : "",
      title: isSet(object.title) ? String(object.title) : "",
    };
  },

  toJSON(message: Dashboard): unknown {
    const obj: any = {};
    if (message.dashboardBindSet) {
      obj.dashboardBindSet = message.dashboardBindSet.map((e) => e ? Empty.toJSON(e) : undefined);
    } else {
      obj.dashboardBindSet = [];
    }
    message.dashboardExtend !== undefined &&
      (obj.dashboardExtend = message.dashboardExtend ? Empty.toJSON(message.dashboardExtend) : undefined);
    if (message.dashboardMapping) {
      obj.dashboardMapping = message.dashboardMapping.map((e) => e ? Empty.toJSON(e) : undefined);
    } else {
      obj.dashboardMapping = [];
    }
    message.dashboardOwnerType !== undefined && (obj.dashboardOwnerType = message.dashboardOwnerType);
    message.dashboardType !== undefined && (obj.dashboardType = message.dashboardType);
    message.iconSet !== undefined && (obj.iconSet = message.iconSet ? IconSet.toJSON(message.iconSet) : undefined);
    message.main !== undefined && (obj.main = message.main ? Main.toJSON(message.main) : undefined);
    message.summary !== undefined && (obj.summary = message.summary);
    if (message.tagInfo) {
      obj.tagInfo = message.tagInfo.map((e) => e ? Taginfo.toJSON(e) : undefined);
    } else {
      obj.tagInfo = [];
    }
    if (message.tags) {
      obj.tags = message.tags.map((e) => e ? Empty.toJSON(e) : undefined);
    } else {
      obj.tags = [];
    }
    message.thumbnail !== undefined && (obj.thumbnail = message.thumbnail);
    message.title !== undefined && (obj.title = message.title);
    return obj;
  },

  create<I extends Exact<DeepPartial<Dashboard>, I>>(base?: I): Dashboard {
    return Dashboard.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Dashboard>, I>>(object: I): Dashboard {
    const message = createBaseDashboard();
    message.dashboardBindSet = object.dashboardBindSet?.map((e) => Empty.fromPartial(e)) || [];
    message.dashboardExtend = (object.dashboardExtend !== undefined && object.dashboardExtend !== null)
      ? Empty.fromPartial(object.dashboardExtend)
      : undefined;
    message.dashboardMapping = object.dashboardMapping?.map((e) => Empty.fromPartial(e)) || [];
    message.dashboardOwnerType = object.dashboardOwnerType ?? "";
    message.dashboardType = object.dashboardType ?? "";
    message.iconSet = (object.iconSet !== undefined && object.iconSet !== null)
      ? IconSet.fromPartial(object.iconSet)
      : undefined;
    message.main = (object.main !== undefined && object.main !== null) ? Main.fromPartial(object.main) : undefined;
    message.summary = object.summary ?? "";
    message.tagInfo = object.tagInfo?.map((e) => Taginfo.fromPartial(e)) || [];
    message.tags = object.tags?.map((e) => Empty.fromPartial(e)) || [];
    message.thumbnail = object.thumbnail ?? "";
    message.title = object.title ?? "";
    return message;
  },
};

function createBaseEmpty(): Empty {
  return {};
}

export const Empty = {
  encode(_: Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Empty {
    return {};
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Empty>, I>>(base?: I): Empty {
    return Empty.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Empty>, I>>(_: I): Empty {
    const message = createBaseEmpty();
    return message;
  },
};

function createBaseIconSet(): IconSet {
  return { icon: "", url: "" };
}

export const IconSet = {
  encode(message: IconSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.icon !== "") {
      writer.uint32(10).string(message.icon);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IconSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIconSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.icon = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IconSet {
    return { icon: isSet(object.icon) ? String(object.icon) : "", url: isSet(object.url) ? String(object.url) : "" };
  },

  toJSON(message: IconSet): unknown {
    const obj: any = {};
    message.icon !== undefined && (obj.icon = message.icon);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create<I extends Exact<DeepPartial<IconSet>, I>>(base?: I): IconSet {
    return IconSet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IconSet>, I>>(object: I): IconSet {
    const message = createBaseIconSet();
    message.icon = object.icon ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseColors(): Colors {
  return { color: "", key: "", name: "" };
}

export const Colors = {
  encode(message: Colors, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.color !== "") {
      writer.uint32(10).string(message.color);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Colors {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseColors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.color = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.key = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Colors {
    return {
      color: isSet(object.color) ? String(object.color) : "",
      key: isSet(object.key) ? String(object.key) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: Colors): unknown {
    const obj: any = {};
    message.color !== undefined && (obj.color = message.color);
    message.key !== undefined && (obj.key = message.key);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<Colors>, I>>(base?: I): Colors {
    return Colors.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Colors>, I>>(object: I): Colors {
    const message = createBaseColors();
    message.color = object.color ?? "";
    message.key = object.key ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseLevels(): Levels {
  return { lineColor: "", operation: "", value: [] };
}

export const Levels = {
  encode(message: Levels, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lineColor !== "") {
      writer.uint32(10).string(message.lineColor);
    }
    if (message.operation !== "") {
      writer.uint32(18).string(message.operation);
    }
    writer.uint32(26).fork();
    for (const v of message.value) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Levels {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLevels();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lineColor = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operation = reader.string();
          continue;
        case 3:
          if (tag === 24) {
            message.value.push(reader.uint32());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.value.push(reader.uint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Levels {
    return {
      lineColor: isSet(object.lineColor) ? String(object.lineColor) : "",
      operation: isSet(object.operation) ? String(object.operation) : "",
      value: Array.isArray(object?.value) ? object.value.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: Levels): unknown {
    const obj: any = {};
    message.lineColor !== undefined && (obj.lineColor = message.lineColor);
    message.operation !== undefined && (obj.operation = message.operation);
    if (message.value) {
      obj.value = message.value.map((e) => Math.round(e));
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Levels>, I>>(base?: I): Levels {
    return Levels.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Levels>, I>>(object: I): Levels {
    const message = createBaseLevels();
    message.lineColor = object.lineColor ?? "";
    message.operation = object.operation ?? "";
    message.value = object.value?.map((e) => e) || [];
    return message;
  },
};

function createBaseUnits(): Units {
  return { key: "", name: "", unit: "", units: [] };
}

export const Units = {
  encode(message: Units, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.unit !== "") {
      writer.uint32(26).string(message.unit);
    }
    for (const v of message.units) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Units {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.unit = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.units.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Units {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      name: isSet(object.name) ? String(object.name) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      units: Array.isArray(object?.units) ? object.units.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Units): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.name !== undefined && (obj.name = message.name);
    message.unit !== undefined && (obj.unit = message.unit);
    if (message.units) {
      obj.units = message.units.map((e) => e);
    } else {
      obj.units = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Units>, I>>(base?: I): Units {
    return Units.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Units>, I>>(object: I): Units {
    const message = createBaseUnits();
    message.key = object.key ?? "";
    message.name = object.name ?? "";
    message.unit = object.unit ?? "";
    message.units = object.units?.map((e) => e) || [];
    return message;
  },
};

function createBaseSettings(): Settings {
  return {
    chartType: "",
    colors: [],
    compareTitle: "",
    compareType: "",
    currentChartType: "",
    density: "",
    fixedTime: "",
    isPercent: false,
    isTimeInterval: false,
    levels: [],
    openCompare: false,
    openStack: false,
    showFieldMapping: false,
    showLine: false,
    showTitle: false,
    stackType: "",
    timeInterval: "",
    titleDesc: "",
    units: [],
    xAxisShowType: "",
  };
}

export const Settings = {
  encode(message: Settings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chartType !== "") {
      writer.uint32(10).string(message.chartType);
    }
    for (const v of message.colors) {
      Colors.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.compareTitle !== "") {
      writer.uint32(26).string(message.compareTitle);
    }
    if (message.compareType !== "") {
      writer.uint32(34).string(message.compareType);
    }
    if (message.currentChartType !== "") {
      writer.uint32(42).string(message.currentChartType);
    }
    if (message.density !== "") {
      writer.uint32(50).string(message.density);
    }
    if (message.fixedTime !== "") {
      writer.uint32(58).string(message.fixedTime);
    }
    if (message.isPercent === true) {
      writer.uint32(64).bool(message.isPercent);
    }
    if (message.isTimeInterval === true) {
      writer.uint32(72).bool(message.isTimeInterval);
    }
    for (const v of message.levels) {
      Levels.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.openCompare === true) {
      writer.uint32(88).bool(message.openCompare);
    }
    if (message.openStack === true) {
      writer.uint32(96).bool(message.openStack);
    }
    if (message.showFieldMapping === true) {
      writer.uint32(104).bool(message.showFieldMapping);
    }
    if (message.showLine === true) {
      writer.uint32(112).bool(message.showLine);
    }
    if (message.showTitle === true) {
      writer.uint32(120).bool(message.showTitle);
    }
    if (message.stackType !== "") {
      writer.uint32(130).string(message.stackType);
    }
    if (message.timeInterval !== "") {
      writer.uint32(138).string(message.timeInterval);
    }
    if (message.titleDesc !== "") {
      writer.uint32(146).string(message.titleDesc);
    }
    for (const v of message.units) {
      Units.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    if (message.xAxisShowType !== "") {
      writer.uint32(162).string(message.xAxisShowType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Settings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chartType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.colors.push(Colors.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.compareTitle = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.compareType = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.currentChartType = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.density = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.fixedTime = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.isPercent = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.isTimeInterval = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.levels.push(Levels.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.openCompare = reader.bool();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.openStack = reader.bool();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.showFieldMapping = reader.bool();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.showLine = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.showTitle = reader.bool();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.stackType = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.timeInterval = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.titleDesc = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.units.push(Units.decode(reader, reader.uint32()));
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.xAxisShowType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Settings {
    return {
      chartType: isSet(object.chartType) ? String(object.chartType) : "",
      colors: Array.isArray(object?.colors) ? object.colors.map((e: any) => Colors.fromJSON(e)) : [],
      compareTitle: isSet(object.compareTitle) ? String(object.compareTitle) : "",
      compareType: isSet(object.compareType) ? String(object.compareType) : "",
      currentChartType: isSet(object.currentChartType) ? String(object.currentChartType) : "",
      density: isSet(object.density) ? String(object.density) : "",
      fixedTime: isSet(object.fixedTime) ? String(object.fixedTime) : "",
      isPercent: isSet(object.isPercent) ? Boolean(object.isPercent) : false,
      isTimeInterval: isSet(object.isTimeInterval) ? Boolean(object.isTimeInterval) : false,
      levels: Array.isArray(object?.levels) ? object.levels.map((e: any) => Levels.fromJSON(e)) : [],
      openCompare: isSet(object.openCompare) ? Boolean(object.openCompare) : false,
      openStack: isSet(object.openStack) ? Boolean(object.openStack) : false,
      showFieldMapping: isSet(object.showFieldMapping) ? Boolean(object.showFieldMapping) : false,
      showLine: isSet(object.showLine) ? Boolean(object.showLine) : false,
      showTitle: isSet(object.showTitle) ? Boolean(object.showTitle) : false,
      stackType: isSet(object.stackType) ? String(object.stackType) : "",
      timeInterval: isSet(object.timeInterval) ? String(object.timeInterval) : "",
      titleDesc: isSet(object.titleDesc) ? String(object.titleDesc) : "",
      units: Array.isArray(object?.units) ? object.units.map((e: any) => Units.fromJSON(e)) : [],
      xAxisShowType: isSet(object.xAxisShowType) ? String(object.xAxisShowType) : "",
    };
  },

  toJSON(message: Settings): unknown {
    const obj: any = {};
    message.chartType !== undefined && (obj.chartType = message.chartType);
    if (message.colors) {
      obj.colors = message.colors.map((e) => e ? Colors.toJSON(e) : undefined);
    } else {
      obj.colors = [];
    }
    message.compareTitle !== undefined && (obj.compareTitle = message.compareTitle);
    message.compareType !== undefined && (obj.compareType = message.compareType);
    message.currentChartType !== undefined && (obj.currentChartType = message.currentChartType);
    message.density !== undefined && (obj.density = message.density);
    message.fixedTime !== undefined && (obj.fixedTime = message.fixedTime);
    message.isPercent !== undefined && (obj.isPercent = message.isPercent);
    message.isTimeInterval !== undefined && (obj.isTimeInterval = message.isTimeInterval);
    if (message.levels) {
      obj.levels = message.levels.map((e) => e ? Levels.toJSON(e) : undefined);
    } else {
      obj.levels = [];
    }
    message.openCompare !== undefined && (obj.openCompare = message.openCompare);
    message.openStack !== undefined && (obj.openStack = message.openStack);
    message.showFieldMapping !== undefined && (obj.showFieldMapping = message.showFieldMapping);
    message.showLine !== undefined && (obj.showLine = message.showLine);
    message.showTitle !== undefined && (obj.showTitle = message.showTitle);
    message.stackType !== undefined && (obj.stackType = message.stackType);
    message.timeInterval !== undefined && (obj.timeInterval = message.timeInterval);
    message.titleDesc !== undefined && (obj.titleDesc = message.titleDesc);
    if (message.units) {
      obj.units = message.units.map((e) => e ? Units.toJSON(e) : undefined);
    } else {
      obj.units = [];
    }
    message.xAxisShowType !== undefined && (obj.xAxisShowType = message.xAxisShowType);
    return obj;
  },

  create<I extends Exact<DeepPartial<Settings>, I>>(base?: I): Settings {
    return Settings.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Settings>, I>>(object: I): Settings {
    const message = createBaseSettings();
    message.chartType = object.chartType ?? "";
    message.colors = object.colors?.map((e) => Colors.fromPartial(e)) || [];
    message.compareTitle = object.compareTitle ?? "";
    message.compareType = object.compareType ?? "";
    message.currentChartType = object.currentChartType ?? "";
    message.density = object.density ?? "";
    message.fixedTime = object.fixedTime ?? "";
    message.isPercent = object.isPercent ?? false;
    message.isTimeInterval = object.isTimeInterval ?? false;
    message.levels = object.levels?.map((e) => Levels.fromPartial(e)) || [];
    message.openCompare = object.openCompare ?? false;
    message.openStack = object.openStack ?? false;
    message.showFieldMapping = object.showFieldMapping ?? false;
    message.showLine = object.showLine ?? false;
    message.showTitle = object.showTitle ?? false;
    message.stackType = object.stackType ?? "";
    message.timeInterval = object.timeInterval ?? "";
    message.titleDesc = object.titleDesc ?? "";
    message.units = object.units?.map((e) => Units.fromPartial(e)) || [];
    message.xAxisShowType = object.xAxisShowType ?? "";
    return message;
  },
};

function createBaseExtend(): Extend {
  return { fixedTime: "", settings: undefined };
}

export const Extend = {
  encode(message: Extend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fixedTime !== "") {
      writer.uint32(10).string(message.fixedTime);
    }
    if (message.settings !== undefined) {
      Settings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Extend {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fixedTime = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.settings = Settings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Extend {
    return {
      fixedTime: isSet(object.fixedTime) ? String(object.fixedTime) : "",
      settings: isSet(object.settings) ? Settings.fromJSON(object.settings) : undefined,
    };
  },

  toJSON(message: Extend): unknown {
    const obj: any = {};
    message.fixedTime !== undefined && (obj.fixedTime = message.fixedTime);
    message.settings !== undefined && (obj.settings = message.settings ? Settings.toJSON(message.settings) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Extend>, I>>(base?: I): Extend {
    return Extend.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Extend>, I>>(object: I): Extend {
    const message = createBaseExtend();
    message.fixedTime = object.fixedTime ?? "";
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? Settings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

function createBaseGroup(): Group {
  return { name: "" };
}

export const Group = {
  encode(message: Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Group {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Group {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: Group): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<Group>, I>>(base?: I): Group {
    return Group.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Group>, I>>(object: I): Group {
    const message = createBaseGroup();
    message.name = object.name ?? "";
    return message;
  },
};

function createBasePos(): Pos {
  return { h: 0, i: "", w: 0, x: 0, y: 0 };
}

export const Pos = {
  encode(message: Pos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.h !== 0) {
      writer.uint32(8).uint32(message.h);
    }
    if (message.i !== "") {
      writer.uint32(18).string(message.i);
    }
    if (message.w !== 0) {
      writer.uint32(24).uint32(message.w);
    }
    if (message.x !== 0) {
      writer.uint32(32).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(41).double(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.h = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.i = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.w = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.x = reader.uint32();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.y = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Pos {
    return {
      h: isSet(object.h) ? Number(object.h) : 0,
      i: isSet(object.i) ? String(object.i) : "",
      w: isSet(object.w) ? Number(object.w) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
    };
  },

  toJSON(message: Pos): unknown {
    const obj: any = {};
    message.h !== undefined && (obj.h = Math.round(message.h));
    message.i !== undefined && (obj.i = message.i);
    message.w !== undefined && (obj.w = Math.round(message.w));
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  create<I extends Exact<DeepPartial<Pos>, I>>(base?: I): Pos {
    return Pos.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Pos>, I>>(object: I): Pos {
    const message = createBasePos();
    message.h = object.h ?? 0;
    message.i = object.i ?? "";
    message.w = object.w ?? 0;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseFilters(): Filters {
  return { id: "", logic: "", name: "", op: "", type: "", value: "" };
}

export const Filters = {
  encode(message: Filters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.logic !== "") {
      writer.uint32(18).string(message.logic);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.op !== "") {
      writer.uint32(34).string(message.op);
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    if (message.value !== "") {
      writer.uint32(50).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filters {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.logic = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.op = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.type = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Filters {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      logic: isSet(object.logic) ? String(object.logic) : "",
      name: isSet(object.name) ? String(object.name) : "",
      op: isSet(object.op) ? String(object.op) : "",
      type: isSet(object.type) ? String(object.type) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Filters): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.logic !== undefined && (obj.logic = message.logic);
    message.name !== undefined && (obj.name = message.name);
    message.op !== undefined && (obj.op = message.op);
    message.type !== undefined && (obj.type = message.type);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<Filters>, I>>(base?: I): Filters {
    return Filters.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Filters>, I>>(object: I): Filters {
    const message = createBaseFilters();
    message.id = object.id ?? "";
    message.logic = object.logic ?? "";
    message.name = object.name ?? "";
    message.op = object.op ?? "";
    message.type = object.type ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseQueryFuncs(): QueryFuncs {
  return { args: [], name: "" };
}

export const QueryFuncs = {
  encode(message: QueryFuncs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.args) {
      writer.uint32(10).string(v!);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFuncs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFuncs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.args.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFuncs {
    return {
      args: Array.isArray(object?.args) ? object.args.map((e: any) => String(e)) : [],
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: QueryFuncs): unknown {
    const obj: any = {};
    if (message.args) {
      obj.args = message.args.map((e) => e);
    } else {
      obj.args = [];
    }
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFuncs>, I>>(base?: I): QueryFuncs {
    return QueryFuncs.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryFuncs>, I>>(object: I): QueryFuncs {
    const message = createBaseQueryFuncs();
    message.args = object.args?.map((e) => e) || [];
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQuery(): Query {
  return {
    alias: "",
    code: "",
    dataSource: "",
    field: "",
    fieldFunc: "",
    fieldType: "",
    fill: "",
    filters: [],
    funcList: [],
    groupBy: [],
    groupByTime: "",
    namespace: "",
    q: "",
    queryFuncs: [],
    type: "",
  };
}

export const Query = {
  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alias !== "") {
      writer.uint32(10).string(message.alias);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.dataSource !== "") {
      writer.uint32(26).string(message.dataSource);
    }
    if (message.field !== "") {
      writer.uint32(34).string(message.field);
    }
    if (message.fieldFunc !== "") {
      writer.uint32(42).string(message.fieldFunc);
    }
    if (message.fieldType !== "") {
      writer.uint32(50).string(message.fieldType);
    }
    if (message.fill !== "") {
      writer.uint32(58).string(message.fill);
    }
    for (const v of message.filters) {
      Filters.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.funcList) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.groupBy) {
      writer.uint32(82).string(v!);
    }
    if (message.groupByTime !== "") {
      writer.uint32(90).string(message.groupByTime);
    }
    if (message.namespace !== "") {
      writer.uint32(98).string(message.namespace);
    }
    if (message.q !== "") {
      writer.uint32(106).string(message.q);
    }
    for (const v of message.queryFuncs) {
      QueryFuncs.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(122).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.alias = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.code = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dataSource = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.field = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.fieldFunc = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.fieldType = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.fill = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.filters.push(Filters.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.funcList.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.groupBy.push(reader.string());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.groupByTime = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.namespace = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.q = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.queryFuncs.push(QueryFuncs.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Query {
    return {
      alias: isSet(object.alias) ? String(object.alias) : "",
      code: isSet(object.code) ? String(object.code) : "",
      dataSource: isSet(object.dataSource) ? String(object.dataSource) : "",
      field: isSet(object.field) ? String(object.field) : "",
      fieldFunc: isSet(object.fieldFunc) ? String(object.fieldFunc) : "",
      fieldType: isSet(object.fieldType) ? String(object.fieldType) : "",
      fill: isSet(object.fill) ? String(object.fill) : "",
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => Filters.fromJSON(e)) : [],
      funcList: Array.isArray(object?.funcList) ? object.funcList.map((e: any) => String(e)) : [],
      groupBy: Array.isArray(object?.groupBy) ? object.groupBy.map((e: any) => String(e)) : [],
      groupByTime: isSet(object.groupByTime) ? String(object.groupByTime) : "",
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      q: isSet(object.q) ? String(object.q) : "",
      queryFuncs: Array.isArray(object?.queryFuncs) ? object.queryFuncs.map((e: any) => QueryFuncs.fromJSON(e)) : [],
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    message.alias !== undefined && (obj.alias = message.alias);
    message.code !== undefined && (obj.code = message.code);
    message.dataSource !== undefined && (obj.dataSource = message.dataSource);
    message.field !== undefined && (obj.field = message.field);
    message.fieldFunc !== undefined && (obj.fieldFunc = message.fieldFunc);
    message.fieldType !== undefined && (obj.fieldType = message.fieldType);
    message.fill !== undefined && (obj.fill = message.fill);
    if (message.filters) {
      obj.filters = message.filters.map((e) => e ? Filters.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    if (message.funcList) {
      obj.funcList = message.funcList.map((e) => e);
    } else {
      obj.funcList = [];
    }
    if (message.groupBy) {
      obj.groupBy = message.groupBy.map((e) => e);
    } else {
      obj.groupBy = [];
    }
    message.groupByTime !== undefined && (obj.groupByTime = message.groupByTime);
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.q !== undefined && (obj.q = message.q);
    if (message.queryFuncs) {
      obj.queryFuncs = message.queryFuncs.map((e) => e ? QueryFuncs.toJSON(e) : undefined);
    } else {
      obj.queryFuncs = [];
    }
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create<I extends Exact<DeepPartial<Query>, I>>(base?: I): Query {
    return Query.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Query>, I>>(object: I): Query {
    const message = createBaseQuery();
    message.alias = object.alias ?? "";
    message.code = object.code ?? "";
    message.dataSource = object.dataSource ?? "";
    message.field = object.field ?? "";
    message.fieldFunc = object.fieldFunc ?? "";
    message.fieldType = object.fieldType ?? "";
    message.fill = object.fill ?? "";
    message.filters = object.filters?.map((e) => Filters.fromPartial(e)) || [];
    message.funcList = object.funcList?.map((e) => e) || [];
    message.groupBy = object.groupBy?.map((e) => e) || [];
    message.groupByTime = object.groupByTime ?? "";
    message.namespace = object.namespace ?? "";
    message.q = object.q ?? "";
    message.queryFuncs = object.queryFuncs?.map((e) => QueryFuncs.fromPartial(e)) || [];
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseQueries(): Queries {
  return { color: "", datasource: "", name: "", qtype: "", query: undefined, type: "", unit: "" };
}

export const Queries = {
  encode(message: Queries, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.color !== "") {
      writer.uint32(10).string(message.color);
    }
    if (message.datasource !== "") {
      writer.uint32(18).string(message.datasource);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.qtype !== "") {
      writer.uint32(34).string(message.qtype);
    }
    if (message.query !== undefined) {
      Query.encode(message.query, writer.uint32(42).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(50).string(message.type);
    }
    if (message.unit !== "") {
      writer.uint32(58).string(message.unit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Queries {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.color = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.datasource = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.qtype = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.query = Query.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.type = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.unit = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Queries {
    return {
      color: isSet(object.color) ? String(object.color) : "",
      datasource: isSet(object.datasource) ? String(object.datasource) : "",
      name: isSet(object.name) ? String(object.name) : "",
      qtype: isSet(object.qtype) ? String(object.qtype) : "",
      query: isSet(object.query) ? Query.fromJSON(object.query) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
    };
  },

  toJSON(message: Queries): unknown {
    const obj: any = {};
    message.color !== undefined && (obj.color = message.color);
    message.datasource !== undefined && (obj.datasource = message.datasource);
    message.name !== undefined && (obj.name = message.name);
    message.qtype !== undefined && (obj.qtype = message.qtype);
    message.query !== undefined && (obj.query = message.query ? Query.toJSON(message.query) : undefined);
    message.type !== undefined && (obj.type = message.type);
    message.unit !== undefined && (obj.unit = message.unit);
    return obj;
  },

  create<I extends Exact<DeepPartial<Queries>, I>>(base?: I): Queries {
    return Queries.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Queries>, I>>(object: I): Queries {
    const message = createBaseQueries();
    message.color = object.color ?? "";
    message.datasource = object.datasource ?? "";
    message.name = object.name ?? "";
    message.qtype = object.qtype ?? "";
    message.query = (object.query !== undefined && object.query !== null) ? Query.fromPartial(object.query) : undefined;
    message.type = object.type ?? "";
    message.unit = object.unit ?? "";
    return message;
  },
};

function createBaseCharts(): Charts {
  return { extend: undefined, group: undefined, name: "", pos: undefined, queries: [], type: "" };
}

export const Charts = {
  encode(message: Charts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.extend !== undefined) {
      Extend.encode(message.extend, writer.uint32(10).fork()).ldelim();
    }
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.pos !== undefined) {
      Pos.encode(message.pos, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.queries) {
      Queries.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(50).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Charts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCharts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.extend = Extend.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.group = Group.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pos = Pos.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.queries.push(Queries.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Charts {
    return {
      extend: isSet(object.extend) ? Extend.fromJSON(object.extend) : undefined,
      group: isSet(object.group) ? Group.fromJSON(object.group) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      pos: isSet(object.pos) ? Pos.fromJSON(object.pos) : undefined,
      queries: Array.isArray(object?.queries) ? object.queries.map((e: any) => Queries.fromJSON(e)) : [],
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: Charts): unknown {
    const obj: any = {};
    message.extend !== undefined && (obj.extend = message.extend ? Extend.toJSON(message.extend) : undefined);
    message.group !== undefined && (obj.group = message.group ? Group.toJSON(message.group) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.pos !== undefined && (obj.pos = message.pos ? Pos.toJSON(message.pos) : undefined);
    if (message.queries) {
      obj.queries = message.queries.map((e) => e ? Queries.toJSON(e) : undefined);
    } else {
      obj.queries = [];
    }
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create<I extends Exact<DeepPartial<Charts>, I>>(base?: I): Charts {
    return Charts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Charts>, I>>(object: I): Charts {
    const message = createBaseCharts();
    message.extend = (object.extend !== undefined && object.extend !== null)
      ? Extend.fromPartial(object.extend)
      : undefined;
    message.group = (object.group !== undefined && object.group !== null) ? Group.fromPartial(object.group) : undefined;
    message.name = object.name ?? "";
    message.pos = (object.pos !== undefined && object.pos !== null) ? Pos.fromPartial(object.pos) : undefined;
    message.queries = object.queries?.map((e) => Queries.fromPartial(e)) || [];
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseDefaultval(): Defaultval {
  return { label: "", value: "" };
}

export const Defaultval = {
  encode(message: Defaultval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.label !== "") {
      writer.uint32(10).string(message.label);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Defaultval {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefaultval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.label = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Defaultval {
    return {
      label: isSet(object.label) ? String(object.label) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Defaultval): unknown {
    const obj: any = {};
    message.label !== undefined && (obj.label = message.label);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<Defaultval>, I>>(base?: I): Defaultval {
    return Defaultval.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Defaultval>, I>>(object: I): Defaultval {
    const message = createBaseDefaultval();
    message.label = object.label ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseDefinition(): Definition {
  return { defaultVal: undefined, field: "", metric: "", object: "", tag: "", value: "" };
}

export const Definition = {
  encode(message: Definition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultVal !== undefined) {
      Defaultval.encode(message.defaultVal, writer.uint32(10).fork()).ldelim();
    }
    if (message.field !== "") {
      writer.uint32(18).string(message.field);
    }
    if (message.metric !== "") {
      writer.uint32(26).string(message.metric);
    }
    if (message.object !== "") {
      writer.uint32(34).string(message.object);
    }
    if (message.tag !== "") {
      writer.uint32(42).string(message.tag);
    }
    if (message.value !== "") {
      writer.uint32(50).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Definition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.defaultVal = Defaultval.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.field = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.metric = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.object = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tag = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Definition {
    return {
      defaultVal: isSet(object.defaultVal) ? Defaultval.fromJSON(object.defaultVal) : undefined,
      field: isSet(object.field) ? String(object.field) : "",
      metric: isSet(object.metric) ? String(object.metric) : "",
      object: isSet(object.object) ? String(object.object) : "",
      tag: isSet(object.tag) ? String(object.tag) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Definition): unknown {
    const obj: any = {};
    message.defaultVal !== undefined &&
      (obj.defaultVal = message.defaultVal ? Defaultval.toJSON(message.defaultVal) : undefined);
    message.field !== undefined && (obj.field = message.field);
    message.metric !== undefined && (obj.metric = message.metric);
    message.object !== undefined && (obj.object = message.object);
    message.tag !== undefined && (obj.tag = message.tag);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<Definition>, I>>(base?: I): Definition {
    return Definition.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Definition>, I>>(object: I): Definition {
    const message = createBaseDefinition();
    message.defaultVal = (object.defaultVal !== undefined && object.defaultVal !== null)
      ? Defaultval.fromPartial(object.defaultVal)
      : undefined;
    message.field = object.field ?? "";
    message.metric = object.metric ?? "";
    message.object = object.object ?? "";
    message.tag = object.tag ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseVars(): Vars {
  return { code: "", datasource: "", definition: undefined, hide: 0, name: "", seq: 0, type: "", valueSort: "" };
}

export const Vars = {
  encode(message: Vars, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.datasource !== "") {
      writer.uint32(18).string(message.datasource);
    }
    if (message.definition !== undefined) {
      Definition.encode(message.definition, writer.uint32(26).fork()).ldelim();
    }
    if (message.hide !== 0) {
      writer.uint32(32).uint32(message.hide);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.seq !== 0) {
      writer.uint32(48).uint32(message.seq);
    }
    if (message.type !== "") {
      writer.uint32(58).string(message.type);
    }
    if (message.valueSort !== "") {
      writer.uint32(66).string(message.valueSort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vars {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVars();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.code = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.datasource = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.definition = Definition.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.hide = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.seq = reader.uint32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.type = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.valueSort = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Vars {
    return {
      code: isSet(object.code) ? String(object.code) : "",
      datasource: isSet(object.datasource) ? String(object.datasource) : "",
      definition: isSet(object.definition) ? Definition.fromJSON(object.definition) : undefined,
      hide: isSet(object.hide) ? Number(object.hide) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      seq: isSet(object.seq) ? Number(object.seq) : 0,
      type: isSet(object.type) ? String(object.type) : "",
      valueSort: isSet(object.valueSort) ? String(object.valueSort) : "",
    };
  },

  toJSON(message: Vars): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.datasource !== undefined && (obj.datasource = message.datasource);
    message.definition !== undefined &&
      (obj.definition = message.definition ? Definition.toJSON(message.definition) : undefined);
    message.hide !== undefined && (obj.hide = Math.round(message.hide));
    message.name !== undefined && (obj.name = message.name);
    message.seq !== undefined && (obj.seq = Math.round(message.seq));
    message.type !== undefined && (obj.type = message.type);
    message.valueSort !== undefined && (obj.valueSort = message.valueSort);
    return obj;
  },

  create<I extends Exact<DeepPartial<Vars>, I>>(base?: I): Vars {
    return Vars.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Vars>, I>>(object: I): Vars {
    const message = createBaseVars();
    message.code = object.code ?? "";
    message.datasource = object.datasource ?? "";
    message.definition = (object.definition !== undefined && object.definition !== null)
      ? Definition.fromPartial(object.definition)
      : undefined;
    message.hide = object.hide ?? 0;
    message.name = object.name ?? "";
    message.seq = object.seq ?? 0;
    message.type = object.type ?? "";
    message.valueSort = object.valueSort ?? "";
    return message;
  },
};

function createBaseMain(): Main {
  return { charts: [], groups: [], type: "", vars: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.charts) {
      Charts.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      writer.uint32(18).string(v!);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    for (const v of message.vars) {
      Vars.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Main {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.charts.push(Charts.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.groups.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.vars.push(Vars.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Main {
    return {
      charts: Array.isArray(object?.charts) ? object.charts.map((e: any) => Charts.fromJSON(e)) : [],
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => String(e)) : [],
      type: isSet(object.type) ? String(object.type) : "",
      vars: Array.isArray(object?.vars) ? object.vars.map((e: any) => Vars.fromJSON(e)) : [],
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.charts) {
      obj.charts = message.charts.map((e) => e ? Charts.toJSON(e) : undefined);
    } else {
      obj.charts = [];
    }
    if (message.groups) {
      obj.groups = message.groups.map((e) => e);
    } else {
      obj.groups = [];
    }
    message.type !== undefined && (obj.type = message.type);
    if (message.vars) {
      obj.vars = message.vars.map((e) => e ? Vars.toJSON(e) : undefined);
    } else {
      obj.vars = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Main>, I>>(base?: I): Main {
    return Main.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Main>, I>>(object: I): Main {
    const message = createBaseMain();
    message.charts = object.charts?.map((e) => Charts.fromPartial(e)) || [];
    message.groups = object.groups?.map((e) => e) || [];
    message.type = object.type ?? "";
    message.vars = object.vars?.map((e) => Vars.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTaginfo(): Taginfo {
  return { id: "", name: "" };
}

export const Taginfo = {
  encode(message: Taginfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Taginfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaginfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Taginfo {
    return { id: isSet(object.id) ? String(object.id) : "", name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: Taginfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<Taginfo>, I>>(base?: I): Taginfo {
    return Taginfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Taginfo>, I>>(object: I): Taginfo {
    const message = createBaseTaginfo();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
