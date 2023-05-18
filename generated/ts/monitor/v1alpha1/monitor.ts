/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "guance.io.json.monitor.v1alpha1";

export interface Monitor {
  extend: Extend | undefined;
  jsonScript: JsonScript | undefined;
  monitorName: string;
  isDisable: boolean;
  dashboardName?: string | undefined;
}

export interface Filter {
  id: string;
  logic: string;
  name: string;
  op: string;
  value: string;
  type?: string | undefined;
}

export interface Children {
  alias: string;
  code: string;
  dataSource: string;
  field: string;
  fieldFunc: string;
  fieldType: string;
  groupBy: string[];
  groupByTime: string;
  namespace: string;
  q: string;
  type: string;
  filters: Filter[];
  queryFuncs: QueryFuncs[];
}

export interface QueryFuncs {
  args: string[];
  name: string;
}

/** has children */
export interface Query {
  children: Children[];
  code: string;
  expression: string;
  funcList: string[];
  q: string;
  type: string;
  alias: string;
  dataSource: string;
  field: string;
  fieldFunc: string;
  fieldType: string;
  groupBy: string[];
  groupByTime: string;
  namespace: string;
  filters: Filter[];
  fill?: string | undefined;
  queryFuncs: QueryFuncs[];
}

export interface QueryList {
  datasource: string;
  qtype: string;
  query: Query | undefined;
  uuid: string;
}

export interface Conditions {
  alias: string;
  operands: string[];
  operator: string;
}

export interface Rule {
  conditionLogic: string;
  periodNum: number;
  status: string;
  checkCount?: number | undefined;
  strength?: number | undefined;
  direction?: string | undefined;
  conditions: Conditions[];
}

export interface Extend {
  funcName: string;
  querylist: QueryList[];
  rules: Rule[];
  noDataPeriodCount: number;
  recoverNeedPeriodCount: number;
}

export interface CheckerOpt {
  rules: Rule[];
  infoEvent?: boolean | undefined;
}

export interface Target {
  alias: string;
  dql: string;
}

export interface JsonScript {
  checkerOpt: CheckerOpt | undefined;
  every: string;
  groupBy: string[];
  interval: number;
  message: string;
  targets: Target[];
  title: string;
  type: string;
  noDataPeriodCount: number;
  recoverNeedPeriodCount: number;
  noDataMessage?: string | undefined;
  noDataTitle?: string | undefined;
  channels: Unknown[];
  atAccounts: Unknown[];
  atNoDataAccounts: Unknown[];
}

export interface Unknown {
}

function createBaseMonitor(): Monitor {
  return { extend: undefined, jsonScript: undefined, monitorName: "", isDisable: false, dashboardName: undefined };
}

export const Monitor = {
  encode(message: Monitor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.extend !== undefined) {
      Extend.encode(message.extend, writer.uint32(10).fork()).ldelim();
    }
    if (message.jsonScript !== undefined) {
      JsonScript.encode(message.jsonScript, writer.uint32(18).fork()).ldelim();
    }
    if (message.monitorName !== "") {
      writer.uint32(26).string(message.monitorName);
    }
    if (message.isDisable === true) {
      writer.uint32(32).bool(message.isDisable);
    }
    if (message.dashboardName !== undefined) {
      writer.uint32(42).string(message.dashboardName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Monitor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitor();
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

          message.jsonScript = JsonScript.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.monitorName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isDisable = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.dashboardName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Monitor {
    return {
      extend: isSet(object.extend) ? Extend.fromJSON(object.extend) : undefined,
      jsonScript: isSet(object.jsonScript) ? JsonScript.fromJSON(object.jsonScript) : undefined,
      monitorName: isSet(object.monitorName) ? String(object.monitorName) : "",
      isDisable: isSet(object.isDisable) ? Boolean(object.isDisable) : false,
      dashboardName: isSet(object.dashboardName) ? String(object.dashboardName) : undefined,
    };
  },

  toJSON(message: Monitor): unknown {
    const obj: any = {};
    message.extend !== undefined && (obj.extend = message.extend ? Extend.toJSON(message.extend) : undefined);
    message.jsonScript !== undefined &&
      (obj.jsonScript = message.jsonScript ? JsonScript.toJSON(message.jsonScript) : undefined);
    message.monitorName !== undefined && (obj.monitorName = message.monitorName);
    message.isDisable !== undefined && (obj.isDisable = message.isDisable);
    message.dashboardName !== undefined && (obj.dashboardName = message.dashboardName);
    return obj;
  },

  create<I extends Exact<DeepPartial<Monitor>, I>>(base?: I): Monitor {
    return Monitor.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Monitor>, I>>(object: I): Monitor {
    const message = createBaseMonitor();
    message.extend = (object.extend !== undefined && object.extend !== null)
      ? Extend.fromPartial(object.extend)
      : undefined;
    message.jsonScript = (object.jsonScript !== undefined && object.jsonScript !== null)
      ? JsonScript.fromPartial(object.jsonScript)
      : undefined;
    message.monitorName = object.monitorName ?? "";
    message.isDisable = object.isDisable ?? false;
    message.dashboardName = object.dashboardName ?? undefined;
    return message;
  },
};

function createBaseFilter(): Filter {
  return { id: "", logic: "", name: "", op: "", value: "", type: undefined };
}

export const Filter = {
  encode(message: Filter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.value !== "") {
      writer.uint32(42).string(message.value);
    }
    if (message.type !== undefined) {
      writer.uint32(50).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilter();
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

          message.value = reader.string();
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

  fromJSON(object: any): Filter {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      logic: isSet(object.logic) ? String(object.logic) : "",
      name: isSet(object.name) ? String(object.name) : "",
      op: isSet(object.op) ? String(object.op) : "",
      value: isSet(object.value) ? String(object.value) : "",
      type: isSet(object.type) ? String(object.type) : undefined,
    };
  },

  toJSON(message: Filter): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.logic !== undefined && (obj.logic = message.logic);
    message.name !== undefined && (obj.name = message.name);
    message.op !== undefined && (obj.op = message.op);
    message.value !== undefined && (obj.value = message.value);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create<I extends Exact<DeepPartial<Filter>, I>>(base?: I): Filter {
    return Filter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Filter>, I>>(object: I): Filter {
    const message = createBaseFilter();
    message.id = object.id ?? "";
    message.logic = object.logic ?? "";
    message.name = object.name ?? "";
    message.op = object.op ?? "";
    message.value = object.value ?? "";
    message.type = object.type ?? undefined;
    return message;
  },
};

function createBaseChildren(): Children {
  return {
    alias: "",
    code: "",
    dataSource: "",
    field: "",
    fieldFunc: "",
    fieldType: "",
    groupBy: [],
    groupByTime: "",
    namespace: "",
    q: "",
    type: "",
    filters: [],
    queryFuncs: [],
  };
}

export const Children = {
  encode(message: Children, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    for (const v of message.groupBy) {
      writer.uint32(58).string(v!);
    }
    if (message.groupByTime !== "") {
      writer.uint32(66).string(message.groupByTime);
    }
    if (message.namespace !== "") {
      writer.uint32(74).string(message.namespace);
    }
    if (message.q !== "") {
      writer.uint32(82).string(message.q);
    }
    if (message.type !== "") {
      writer.uint32(90).string(message.type);
    }
    for (const v of message.filters) {
      Filter.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.queryFuncs) {
      QueryFuncs.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Children {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChildren();
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

          message.groupBy.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.groupByTime = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.namespace = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.q = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.type = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.filters.push(Filter.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.queryFuncs.push(QueryFuncs.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Children {
    return {
      alias: isSet(object.alias) ? String(object.alias) : "",
      code: isSet(object.code) ? String(object.code) : "",
      dataSource: isSet(object.dataSource) ? String(object.dataSource) : "",
      field: isSet(object.field) ? String(object.field) : "",
      fieldFunc: isSet(object.fieldFunc) ? String(object.fieldFunc) : "",
      fieldType: isSet(object.fieldType) ? String(object.fieldType) : "",
      groupBy: Array.isArray(object?.groupBy) ? object.groupBy.map((e: any) => String(e)) : [],
      groupByTime: isSet(object.groupByTime) ? String(object.groupByTime) : "",
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      q: isSet(object.q) ? String(object.q) : "",
      type: isSet(object.type) ? String(object.type) : "",
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => Filter.fromJSON(e)) : [],
      queryFuncs: Array.isArray(object?.queryFuncs) ? object.queryFuncs.map((e: any) => QueryFuncs.fromJSON(e)) : [],
    };
  },

  toJSON(message: Children): unknown {
    const obj: any = {};
    message.alias !== undefined && (obj.alias = message.alias);
    message.code !== undefined && (obj.code = message.code);
    message.dataSource !== undefined && (obj.dataSource = message.dataSource);
    message.field !== undefined && (obj.field = message.field);
    message.fieldFunc !== undefined && (obj.fieldFunc = message.fieldFunc);
    message.fieldType !== undefined && (obj.fieldType = message.fieldType);
    if (message.groupBy) {
      obj.groupBy = message.groupBy.map((e) => e);
    } else {
      obj.groupBy = [];
    }
    message.groupByTime !== undefined && (obj.groupByTime = message.groupByTime);
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.q !== undefined && (obj.q = message.q);
    message.type !== undefined && (obj.type = message.type);
    if (message.filters) {
      obj.filters = message.filters.map((e) => e ? Filter.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    if (message.queryFuncs) {
      obj.queryFuncs = message.queryFuncs.map((e) => e ? QueryFuncs.toJSON(e) : undefined);
    } else {
      obj.queryFuncs = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Children>, I>>(base?: I): Children {
    return Children.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Children>, I>>(object: I): Children {
    const message = createBaseChildren();
    message.alias = object.alias ?? "";
    message.code = object.code ?? "";
    message.dataSource = object.dataSource ?? "";
    message.field = object.field ?? "";
    message.fieldFunc = object.fieldFunc ?? "";
    message.fieldType = object.fieldType ?? "";
    message.groupBy = object.groupBy?.map((e) => e) || [];
    message.groupByTime = object.groupByTime ?? "";
    message.namespace = object.namespace ?? "";
    message.q = object.q ?? "";
    message.type = object.type ?? "";
    message.filters = object.filters?.map((e) => Filter.fromPartial(e)) || [];
    message.queryFuncs = object.queryFuncs?.map((e) => QueryFuncs.fromPartial(e)) || [];
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
    children: [],
    code: "",
    expression: "",
    funcList: [],
    q: "",
    type: "",
    alias: "",
    dataSource: "",
    field: "",
    fieldFunc: "",
    fieldType: "",
    groupBy: [],
    groupByTime: "",
    namespace: "",
    filters: [],
    fill: undefined,
    queryFuncs: [],
  };
}

export const Query = {
  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.children) {
      Children.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.expression !== "") {
      writer.uint32(26).string(message.expression);
    }
    for (const v of message.funcList) {
      writer.uint32(34).string(v!);
    }
    if (message.q !== "") {
      writer.uint32(42).string(message.q);
    }
    if (message.type !== "") {
      writer.uint32(50).string(message.type);
    }
    if (message.alias !== "") {
      writer.uint32(58).string(message.alias);
    }
    if (message.dataSource !== "") {
      writer.uint32(66).string(message.dataSource);
    }
    if (message.field !== "") {
      writer.uint32(74).string(message.field);
    }
    if (message.fieldFunc !== "") {
      writer.uint32(82).string(message.fieldFunc);
    }
    if (message.fieldType !== "") {
      writer.uint32(90).string(message.fieldType);
    }
    for (const v of message.groupBy) {
      writer.uint32(98).string(v!);
    }
    if (message.groupByTime !== "") {
      writer.uint32(106).string(message.groupByTime);
    }
    if (message.namespace !== "") {
      writer.uint32(114).string(message.namespace);
    }
    for (const v of message.filters) {
      Filter.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.fill !== undefined) {
      writer.uint32(130).string(message.fill);
    }
    for (const v of message.queryFuncs) {
      QueryFuncs.encode(v!, writer.uint32(138).fork()).ldelim();
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

          message.children.push(Children.decode(reader, reader.uint32()));
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

          message.expression = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.funcList.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.q = reader.string();
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

          message.alias = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.dataSource = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.field = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.fieldFunc = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.fieldType = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.groupBy.push(reader.string());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.groupByTime = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.namespace = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.filters.push(Filter.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.fill = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.queryFuncs.push(QueryFuncs.decode(reader, reader.uint32()));
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
      children: Array.isArray(object?.children) ? object.children.map((e: any) => Children.fromJSON(e)) : [],
      code: isSet(object.code) ? String(object.code) : "",
      expression: isSet(object.expression) ? String(object.expression) : "",
      funcList: Array.isArray(object?.funcList) ? object.funcList.map((e: any) => String(e)) : [],
      q: isSet(object.q) ? String(object.q) : "",
      type: isSet(object.type) ? String(object.type) : "",
      alias: isSet(object.alias) ? String(object.alias) : "",
      dataSource: isSet(object.dataSource) ? String(object.dataSource) : "",
      field: isSet(object.field) ? String(object.field) : "",
      fieldFunc: isSet(object.fieldFunc) ? String(object.fieldFunc) : "",
      fieldType: isSet(object.fieldType) ? String(object.fieldType) : "",
      groupBy: Array.isArray(object?.groupBy) ? object.groupBy.map((e: any) => String(e)) : [],
      groupByTime: isSet(object.groupByTime) ? String(object.groupByTime) : "",
      namespace: isSet(object.namespace) ? String(object.namespace) : "",
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => Filter.fromJSON(e)) : [],
      fill: isSet(object.fill) ? String(object.fill) : undefined,
      queryFuncs: Array.isArray(object?.queryFuncs) ? object.queryFuncs.map((e: any) => QueryFuncs.fromJSON(e)) : [],
    };
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    if (message.children) {
      obj.children = message.children.map((e) => e ? Children.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    message.code !== undefined && (obj.code = message.code);
    message.expression !== undefined && (obj.expression = message.expression);
    if (message.funcList) {
      obj.funcList = message.funcList.map((e) => e);
    } else {
      obj.funcList = [];
    }
    message.q !== undefined && (obj.q = message.q);
    message.type !== undefined && (obj.type = message.type);
    message.alias !== undefined && (obj.alias = message.alias);
    message.dataSource !== undefined && (obj.dataSource = message.dataSource);
    message.field !== undefined && (obj.field = message.field);
    message.fieldFunc !== undefined && (obj.fieldFunc = message.fieldFunc);
    message.fieldType !== undefined && (obj.fieldType = message.fieldType);
    if (message.groupBy) {
      obj.groupBy = message.groupBy.map((e) => e);
    } else {
      obj.groupBy = [];
    }
    message.groupByTime !== undefined && (obj.groupByTime = message.groupByTime);
    message.namespace !== undefined && (obj.namespace = message.namespace);
    if (message.filters) {
      obj.filters = message.filters.map((e) => e ? Filter.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    message.fill !== undefined && (obj.fill = message.fill);
    if (message.queryFuncs) {
      obj.queryFuncs = message.queryFuncs.map((e) => e ? QueryFuncs.toJSON(e) : undefined);
    } else {
      obj.queryFuncs = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Query>, I>>(base?: I): Query {
    return Query.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Query>, I>>(object: I): Query {
    const message = createBaseQuery();
    message.children = object.children?.map((e) => Children.fromPartial(e)) || [];
    message.code = object.code ?? "";
    message.expression = object.expression ?? "";
    message.funcList = object.funcList?.map((e) => e) || [];
    message.q = object.q ?? "";
    message.type = object.type ?? "";
    message.alias = object.alias ?? "";
    message.dataSource = object.dataSource ?? "";
    message.field = object.field ?? "";
    message.fieldFunc = object.fieldFunc ?? "";
    message.fieldType = object.fieldType ?? "";
    message.groupBy = object.groupBy?.map((e) => e) || [];
    message.groupByTime = object.groupByTime ?? "";
    message.namespace = object.namespace ?? "";
    message.filters = object.filters?.map((e) => Filter.fromPartial(e)) || [];
    message.fill = object.fill ?? undefined;
    message.queryFuncs = object.queryFuncs?.map((e) => QueryFuncs.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryList(): QueryList {
  return { datasource: "", qtype: "", query: undefined, uuid: "" };
}

export const QueryList = {
  encode(message: QueryList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.datasource !== "") {
      writer.uint32(10).string(message.datasource);
    }
    if (message.qtype !== "") {
      writer.uint32(18).string(message.qtype);
    }
    if (message.query !== undefined) {
      Query.encode(message.query, writer.uint32(26).fork()).ldelim();
    }
    if (message.uuid !== "") {
      writer.uint32(34).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.datasource = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.qtype = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.query = Query.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.uuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryList {
    return {
      datasource: isSet(object.datasource) ? String(object.datasource) : "",
      qtype: isSet(object.qtype) ? String(object.qtype) : "",
      query: isSet(object.query) ? Query.fromJSON(object.query) : undefined,
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
    };
  },

  toJSON(message: QueryList): unknown {
    const obj: any = {};
    message.datasource !== undefined && (obj.datasource = message.datasource);
    message.qtype !== undefined && (obj.qtype = message.qtype);
    message.query !== undefined && (obj.query = message.query ? Query.toJSON(message.query) : undefined);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryList>, I>>(base?: I): QueryList {
    return QueryList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryList>, I>>(object: I): QueryList {
    const message = createBaseQueryList();
    message.datasource = object.datasource ?? "";
    message.qtype = object.qtype ?? "";
    message.query = (object.query !== undefined && object.query !== null) ? Query.fromPartial(object.query) : undefined;
    message.uuid = object.uuid ?? "";
    return message;
  },
};

function createBaseConditions(): Conditions {
  return { alias: "", operands: [], operator: "" };
}

export const Conditions = {
  encode(message: Conditions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alias !== "") {
      writer.uint32(10).string(message.alias);
    }
    for (const v of message.operands) {
      writer.uint32(18).string(v!);
    }
    if (message.operator !== "") {
      writer.uint32(26).string(message.operator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Conditions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConditions();
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

          message.operands.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Conditions {
    return {
      alias: isSet(object.alias) ? String(object.alias) : "",
      operands: Array.isArray(object?.operands) ? object.operands.map((e: any) => String(e)) : [],
      operator: isSet(object.operator) ? String(object.operator) : "",
    };
  },

  toJSON(message: Conditions): unknown {
    const obj: any = {};
    message.alias !== undefined && (obj.alias = message.alias);
    if (message.operands) {
      obj.operands = message.operands.map((e) => e);
    } else {
      obj.operands = [];
    }
    message.operator !== undefined && (obj.operator = message.operator);
    return obj;
  },

  create<I extends Exact<DeepPartial<Conditions>, I>>(base?: I): Conditions {
    return Conditions.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Conditions>, I>>(object: I): Conditions {
    const message = createBaseConditions();
    message.alias = object.alias ?? "";
    message.operands = object.operands?.map((e) => e) || [];
    message.operator = object.operator ?? "";
    return message;
  },
};

function createBaseRule(): Rule {
  return {
    conditionLogic: "",
    periodNum: 0,
    status: "",
    checkCount: undefined,
    strength: undefined,
    direction: undefined,
    conditions: [],
  };
}

export const Rule = {
  encode(message: Rule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conditionLogic !== "") {
      writer.uint32(10).string(message.conditionLogic);
    }
    if (message.periodNum !== 0) {
      writer.uint32(16).int64(message.periodNum);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    if (message.checkCount !== undefined) {
      writer.uint32(32).int64(message.checkCount);
    }
    if (message.strength !== undefined) {
      writer.uint32(40).int64(message.strength);
    }
    if (message.direction !== undefined) {
      writer.uint32(50).string(message.direction);
    }
    for (const v of message.conditions) {
      Conditions.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.conditionLogic = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.periodNum = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.status = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.checkCount = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.strength = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.direction = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.conditions.push(Conditions.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Rule {
    return {
      conditionLogic: isSet(object.conditionLogic) ? String(object.conditionLogic) : "",
      periodNum: isSet(object.periodNum) ? Number(object.periodNum) : 0,
      status: isSet(object.status) ? String(object.status) : "",
      checkCount: isSet(object.checkCount) ? Number(object.checkCount) : undefined,
      strength: isSet(object.strength) ? Number(object.strength) : undefined,
      direction: isSet(object.direction) ? String(object.direction) : undefined,
      conditions: Array.isArray(object?.conditions) ? object.conditions.map((e: any) => Conditions.fromJSON(e)) : [],
    };
  },

  toJSON(message: Rule): unknown {
    const obj: any = {};
    message.conditionLogic !== undefined && (obj.conditionLogic = message.conditionLogic);
    message.periodNum !== undefined && (obj.periodNum = Math.round(message.periodNum));
    message.status !== undefined && (obj.status = message.status);
    message.checkCount !== undefined && (obj.checkCount = Math.round(message.checkCount));
    message.strength !== undefined && (obj.strength = Math.round(message.strength));
    message.direction !== undefined && (obj.direction = message.direction);
    if (message.conditions) {
      obj.conditions = message.conditions.map((e) => e ? Conditions.toJSON(e) : undefined);
    } else {
      obj.conditions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Rule>, I>>(base?: I): Rule {
    return Rule.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Rule>, I>>(object: I): Rule {
    const message = createBaseRule();
    message.conditionLogic = object.conditionLogic ?? "";
    message.periodNum = object.periodNum ?? 0;
    message.status = object.status ?? "";
    message.checkCount = object.checkCount ?? undefined;
    message.strength = object.strength ?? undefined;
    message.direction = object.direction ?? undefined;
    message.conditions = object.conditions?.map((e) => Conditions.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExtend(): Extend {
  return { funcName: "", querylist: [], rules: [], noDataPeriodCount: 0, recoverNeedPeriodCount: 0 };
}

export const Extend = {
  encode(message: Extend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.funcName !== "") {
      writer.uint32(10).string(message.funcName);
    }
    for (const v of message.querylist) {
      QueryList.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.rules) {
      Rule.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.noDataPeriodCount !== 0) {
      writer.uint32(32).int64(message.noDataPeriodCount);
    }
    if (message.recoverNeedPeriodCount !== 0) {
      writer.uint32(40).int64(message.recoverNeedPeriodCount);
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

          message.funcName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.querylist.push(QueryList.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rules.push(Rule.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.noDataPeriodCount = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.recoverNeedPeriodCount = longToNumber(reader.int64() as Long);
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
      funcName: isSet(object.funcName) ? String(object.funcName) : "",
      querylist: Array.isArray(object?.querylist) ? object.querylist.map((e: any) => QueryList.fromJSON(e)) : [],
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => Rule.fromJSON(e)) : [],
      noDataPeriodCount: isSet(object.noDataPeriodCount) ? Number(object.noDataPeriodCount) : 0,
      recoverNeedPeriodCount: isSet(object.recoverNeedPeriodCount) ? Number(object.recoverNeedPeriodCount) : 0,
    };
  },

  toJSON(message: Extend): unknown {
    const obj: any = {};
    message.funcName !== undefined && (obj.funcName = message.funcName);
    if (message.querylist) {
      obj.querylist = message.querylist.map((e) => e ? QueryList.toJSON(e) : undefined);
    } else {
      obj.querylist = [];
    }
    if (message.rules) {
      obj.rules = message.rules.map((e) => e ? Rule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }
    message.noDataPeriodCount !== undefined && (obj.noDataPeriodCount = Math.round(message.noDataPeriodCount));
    message.recoverNeedPeriodCount !== undefined &&
      (obj.recoverNeedPeriodCount = Math.round(message.recoverNeedPeriodCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Extend>, I>>(base?: I): Extend {
    return Extend.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Extend>, I>>(object: I): Extend {
    const message = createBaseExtend();
    message.funcName = object.funcName ?? "";
    message.querylist = object.querylist?.map((e) => QueryList.fromPartial(e)) || [];
    message.rules = object.rules?.map((e) => Rule.fromPartial(e)) || [];
    message.noDataPeriodCount = object.noDataPeriodCount ?? 0;
    message.recoverNeedPeriodCount = object.recoverNeedPeriodCount ?? 0;
    return message;
  },
};

function createBaseCheckerOpt(): CheckerOpt {
  return { rules: [], infoEvent: undefined };
}

export const CheckerOpt = {
  encode(message: CheckerOpt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rules) {
      Rule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.infoEvent !== undefined) {
      writer.uint32(16).bool(message.infoEvent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckerOpt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckerOpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rules.push(Rule.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.infoEvent = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckerOpt {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => Rule.fromJSON(e)) : [],
      infoEvent: isSet(object.infoEvent) ? Boolean(object.infoEvent) : undefined,
    };
  },

  toJSON(message: CheckerOpt): unknown {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map((e) => e ? Rule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }
    message.infoEvent !== undefined && (obj.infoEvent = message.infoEvent);
    return obj;
  },

  create<I extends Exact<DeepPartial<CheckerOpt>, I>>(base?: I): CheckerOpt {
    return CheckerOpt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CheckerOpt>, I>>(object: I): CheckerOpt {
    const message = createBaseCheckerOpt();
    message.rules = object.rules?.map((e) => Rule.fromPartial(e)) || [];
    message.infoEvent = object.infoEvent ?? undefined;
    return message;
  },
};

function createBaseTarget(): Target {
  return { alias: "", dql: "" };
}

export const Target = {
  encode(message: Target, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alias !== "") {
      writer.uint32(10).string(message.alias);
    }
    if (message.dql !== "") {
      writer.uint32(18).string(message.dql);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Target {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTarget();
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

          message.dql = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Target {
    return { alias: isSet(object.alias) ? String(object.alias) : "", dql: isSet(object.dql) ? String(object.dql) : "" };
  },

  toJSON(message: Target): unknown {
    const obj: any = {};
    message.alias !== undefined && (obj.alias = message.alias);
    message.dql !== undefined && (obj.dql = message.dql);
    return obj;
  },

  create<I extends Exact<DeepPartial<Target>, I>>(base?: I): Target {
    return Target.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Target>, I>>(object: I): Target {
    const message = createBaseTarget();
    message.alias = object.alias ?? "";
    message.dql = object.dql ?? "";
    return message;
  },
};

function createBaseJsonScript(): JsonScript {
  return {
    checkerOpt: undefined,
    every: "",
    groupBy: [],
    interval: 0,
    message: "",
    targets: [],
    title: "",
    type: "",
    noDataPeriodCount: 0,
    recoverNeedPeriodCount: 0,
    noDataMessage: undefined,
    noDataTitle: undefined,
    channels: [],
    atAccounts: [],
    atNoDataAccounts: [],
  };
}

export const JsonScript = {
  encode(message: JsonScript, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.checkerOpt !== undefined) {
      CheckerOpt.encode(message.checkerOpt, writer.uint32(10).fork()).ldelim();
    }
    if (message.every !== "") {
      writer.uint32(18).string(message.every);
    }
    for (const v of message.groupBy) {
      writer.uint32(26).string(v!);
    }
    if (message.interval !== 0) {
      writer.uint32(32).int64(message.interval);
    }
    if (message.message !== "") {
      writer.uint32(42).string(message.message);
    }
    for (const v of message.targets) {
      Target.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(58).string(message.title);
    }
    if (message.type !== "") {
      writer.uint32(66).string(message.type);
    }
    if (message.noDataPeriodCount !== 0) {
      writer.uint32(72).int64(message.noDataPeriodCount);
    }
    if (message.recoverNeedPeriodCount !== 0) {
      writer.uint32(80).int64(message.recoverNeedPeriodCount);
    }
    if (message.noDataMessage !== undefined) {
      writer.uint32(90).string(message.noDataMessage);
    }
    if (message.noDataTitle !== undefined) {
      writer.uint32(98).string(message.noDataTitle);
    }
    for (const v of message.channels) {
      Unknown.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.atAccounts) {
      Unknown.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.atNoDataAccounts) {
      Unknown.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JsonScript {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJsonScript();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.checkerOpt = CheckerOpt.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.every = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.groupBy.push(reader.string());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.interval = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.message = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.targets.push(Target.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.title = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.type = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.noDataPeriodCount = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.recoverNeedPeriodCount = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.noDataMessage = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.noDataTitle = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.channels.push(Unknown.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.atAccounts.push(Unknown.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.atNoDataAccounts.push(Unknown.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JsonScript {
    return {
      checkerOpt: isSet(object.checkerOpt) ? CheckerOpt.fromJSON(object.checkerOpt) : undefined,
      every: isSet(object.every) ? String(object.every) : "",
      groupBy: Array.isArray(object?.groupBy) ? object.groupBy.map((e: any) => String(e)) : [],
      interval: isSet(object.interval) ? Number(object.interval) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      targets: Array.isArray(object?.targets) ? object.targets.map((e: any) => Target.fromJSON(e)) : [],
      title: isSet(object.title) ? String(object.title) : "",
      type: isSet(object.type) ? String(object.type) : "",
      noDataPeriodCount: isSet(object.noDataPeriodCount) ? Number(object.noDataPeriodCount) : 0,
      recoverNeedPeriodCount: isSet(object.recoverNeedPeriodCount) ? Number(object.recoverNeedPeriodCount) : 0,
      noDataMessage: isSet(object.noDataMessage) ? String(object.noDataMessage) : undefined,
      noDataTitle: isSet(object.noDataTitle) ? String(object.noDataTitle) : undefined,
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => Unknown.fromJSON(e)) : [],
      atAccounts: Array.isArray(object?.atAccounts) ? object.atAccounts.map((e: any) => Unknown.fromJSON(e)) : [],
      atNoDataAccounts: Array.isArray(object?.atNoDataAccounts)
        ? object.atNoDataAccounts.map((e: any) => Unknown.fromJSON(e))
        : [],
    };
  },

  toJSON(message: JsonScript): unknown {
    const obj: any = {};
    message.checkerOpt !== undefined &&
      (obj.checkerOpt = message.checkerOpt ? CheckerOpt.toJSON(message.checkerOpt) : undefined);
    message.every !== undefined && (obj.every = message.every);
    if (message.groupBy) {
      obj.groupBy = message.groupBy.map((e) => e);
    } else {
      obj.groupBy = [];
    }
    message.interval !== undefined && (obj.interval = Math.round(message.interval));
    message.message !== undefined && (obj.message = message.message);
    if (message.targets) {
      obj.targets = message.targets.map((e) => e ? Target.toJSON(e) : undefined);
    } else {
      obj.targets = [];
    }
    message.title !== undefined && (obj.title = message.title);
    message.type !== undefined && (obj.type = message.type);
    message.noDataPeriodCount !== undefined && (obj.noDataPeriodCount = Math.round(message.noDataPeriodCount));
    message.recoverNeedPeriodCount !== undefined &&
      (obj.recoverNeedPeriodCount = Math.round(message.recoverNeedPeriodCount));
    message.noDataMessage !== undefined && (obj.noDataMessage = message.noDataMessage);
    message.noDataTitle !== undefined && (obj.noDataTitle = message.noDataTitle);
    if (message.channels) {
      obj.channels = message.channels.map((e) => e ? Unknown.toJSON(e) : undefined);
    } else {
      obj.channels = [];
    }
    if (message.atAccounts) {
      obj.atAccounts = message.atAccounts.map((e) => e ? Unknown.toJSON(e) : undefined);
    } else {
      obj.atAccounts = [];
    }
    if (message.atNoDataAccounts) {
      obj.atNoDataAccounts = message.atNoDataAccounts.map((e) => e ? Unknown.toJSON(e) : undefined);
    } else {
      obj.atNoDataAccounts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JsonScript>, I>>(base?: I): JsonScript {
    return JsonScript.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<JsonScript>, I>>(object: I): JsonScript {
    const message = createBaseJsonScript();
    message.checkerOpt = (object.checkerOpt !== undefined && object.checkerOpt !== null)
      ? CheckerOpt.fromPartial(object.checkerOpt)
      : undefined;
    message.every = object.every ?? "";
    message.groupBy = object.groupBy?.map((e) => e) || [];
    message.interval = object.interval ?? 0;
    message.message = object.message ?? "";
    message.targets = object.targets?.map((e) => Target.fromPartial(e)) || [];
    message.title = object.title ?? "";
    message.type = object.type ?? "";
    message.noDataPeriodCount = object.noDataPeriodCount ?? 0;
    message.recoverNeedPeriodCount = object.recoverNeedPeriodCount ?? 0;
    message.noDataMessage = object.noDataMessage ?? undefined;
    message.noDataTitle = object.noDataTitle ?? undefined;
    message.channels = object.channels?.map((e) => Unknown.fromPartial(e)) || [];
    message.atAccounts = object.atAccounts?.map((e) => Unknown.fromPartial(e)) || [];
    message.atNoDataAccounts = object.atNoDataAccounts?.map((e) => Unknown.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUnknown(): Unknown {
  return {};
}

export const Unknown = {
  encode(_: Unknown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Unknown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnknown();
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

  fromJSON(_: any): Unknown {
    return {};
  },

  toJSON(_: Unknown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Unknown>, I>>(base?: I): Unknown {
    return Unknown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Unknown>, I>>(_: I): Unknown {
    const message = createBaseUnknown();
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
