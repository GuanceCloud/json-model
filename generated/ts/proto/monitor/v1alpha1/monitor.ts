/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "proto.monitor.v1alpha1";

export interface Monitor {
  extend: Extend | undefined;
  jsonScript: JsonScript | undefined;
  monitorName: string;
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
}

export interface Query {
  children: Children[];
  code: string;
  expression: string;
  funcList: string[];
  q: string;
  type: string;
}

export interface Querylist {
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

export interface Rules {
  conditionLogic: string;
  conditions: Conditions[];
  status: string;
}

export interface Extend {
  funcName: string;
  querylist: Querylist[];
  rules: Rules[];
}

export interface CheckerOpt {
  rules: Rules[];
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
  recoverNeedPeriodCount: number;
  targets: Target[];
  title: string;
  type: string;
}

function createBaseMonitor(): Monitor {
  return { extend: undefined, jsonScript: undefined, monitorName: "" };
}

export const Monitor = {
  encode(message: Monitor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.extend !== undefined) {
      Extend.encode(message.extend, writer.uint32(10).fork()).ldelim();
    }
    if (message.jsonScript !== undefined) {
      JsonScript.encode(message.jsonScript, writer.uint32(26).fork()).ldelim();
    }
    if (message.monitorName !== "") {
      writer.uint32(34).string(message.monitorName);
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.jsonScript = JsonScript.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.monitorName = reader.string();
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
    };
  },

  toJSON(message: Monitor): unknown {
    const obj: any = {};
    message.extend !== undefined && (obj.extend = message.extend ? Extend.toJSON(message.extend) : undefined);
    message.jsonScript !== undefined &&
      (obj.jsonScript = message.jsonScript ? JsonScript.toJSON(message.jsonScript) : undefined);
    message.monitorName !== undefined && (obj.monitorName = message.monitorName);
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
    return message;
  },
};

function createBaseQuery(): Query {
  return { children: [], code: "", expression: "", funcList: [], q: "", type: "" };
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
    return message;
  },
};

function createBaseQuerylist(): Querylist {
  return { datasource: "", qtype: "", query: undefined, uuid: "" };
}

export const Querylist = {
  encode(message: Querylist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Querylist {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerylist();
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

  fromJSON(object: any): Querylist {
    return {
      datasource: isSet(object.datasource) ? String(object.datasource) : "",
      qtype: isSet(object.qtype) ? String(object.qtype) : "",
      query: isSet(object.query) ? Query.fromJSON(object.query) : undefined,
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
    };
  },

  toJSON(message: Querylist): unknown {
    const obj: any = {};
    message.datasource !== undefined && (obj.datasource = message.datasource);
    message.qtype !== undefined && (obj.qtype = message.qtype);
    message.query !== undefined && (obj.query = message.query ? Query.toJSON(message.query) : undefined);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  create<I extends Exact<DeepPartial<Querylist>, I>>(base?: I): Querylist {
    return Querylist.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Querylist>, I>>(object: I): Querylist {
    const message = createBaseQuerylist();
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

function createBaseRules(): Rules {
  return { conditionLogic: "", conditions: [], status: "" };
}

export const Rules = {
  encode(message: Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conditionLogic !== "") {
      writer.uint32(10).string(message.conditionLogic);
    }
    for (const v of message.conditions) {
      Conditions.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRules();
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
          if (tag !== 18) {
            break;
          }

          message.conditions.push(Conditions.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.status = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Rules {
    return {
      conditionLogic: isSet(object.conditionLogic) ? String(object.conditionLogic) : "",
      conditions: Array.isArray(object?.conditions) ? object.conditions.map((e: any) => Conditions.fromJSON(e)) : [],
      status: isSet(object.status) ? String(object.status) : "",
    };
  },

  toJSON(message: Rules): unknown {
    const obj: any = {};
    message.conditionLogic !== undefined && (obj.conditionLogic = message.conditionLogic);
    if (message.conditions) {
      obj.conditions = message.conditions.map((e) => e ? Conditions.toJSON(e) : undefined);
    } else {
      obj.conditions = [];
    }
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  create<I extends Exact<DeepPartial<Rules>, I>>(base?: I): Rules {
    return Rules.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Rules>, I>>(object: I): Rules {
    const message = createBaseRules();
    message.conditionLogic = object.conditionLogic ?? "";
    message.conditions = object.conditions?.map((e) => Conditions.fromPartial(e)) || [];
    message.status = object.status ?? "";
    return message;
  },
};

function createBaseExtend(): Extend {
  return { funcName: "", querylist: [], rules: [] };
}

export const Extend = {
  encode(message: Extend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.funcName !== "") {
      writer.uint32(10).string(message.funcName);
    }
    for (const v of message.querylist) {
      Querylist.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.rules) {
      Rules.encode(v!, writer.uint32(26).fork()).ldelim();
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

          message.querylist.push(Querylist.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rules.push(Rules.decode(reader, reader.uint32()));
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
      querylist: Array.isArray(object?.querylist) ? object.querylist.map((e: any) => Querylist.fromJSON(e)) : [],
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => Rules.fromJSON(e)) : [],
    };
  },

  toJSON(message: Extend): unknown {
    const obj: any = {};
    message.funcName !== undefined && (obj.funcName = message.funcName);
    if (message.querylist) {
      obj.querylist = message.querylist.map((e) => e ? Querylist.toJSON(e) : undefined);
    } else {
      obj.querylist = [];
    }
    if (message.rules) {
      obj.rules = message.rules.map((e) => e ? Rules.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Extend>, I>>(base?: I): Extend {
    return Extend.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Extend>, I>>(object: I): Extend {
    const message = createBaseExtend();
    message.funcName = object.funcName ?? "";
    message.querylist = object.querylist?.map((e) => Querylist.fromPartial(e)) || [];
    message.rules = object.rules?.map((e) => Rules.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCheckerOpt(): CheckerOpt {
  return { rules: [] };
}

export const CheckerOpt = {
  encode(message: CheckerOpt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rules) {
      Rules.encode(v!, writer.uint32(10).fork()).ldelim();
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

          message.rules.push(Rules.decode(reader, reader.uint32()));
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
    return { rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => Rules.fromJSON(e)) : [] };
  },

  toJSON(message: CheckerOpt): unknown {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map((e) => e ? Rules.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CheckerOpt>, I>>(base?: I): CheckerOpt {
    return CheckerOpt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CheckerOpt>, I>>(object: I): CheckerOpt {
    const message = createBaseCheckerOpt();
    message.rules = object.rules?.map((e) => Rules.fromPartial(e)) || [];
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
    recoverNeedPeriodCount: 0,
    targets: [],
    title: "",
    type: "",
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
      writer.uint32(32).uint32(message.interval);
    }
    if (message.message !== "") {
      writer.uint32(42).string(message.message);
    }
    if (message.recoverNeedPeriodCount !== 0) {
      writer.uint32(48).uint32(message.recoverNeedPeriodCount);
    }
    for (const v of message.targets) {
      Target.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(66).string(message.title);
    }
    if (message.type !== "") {
      writer.uint32(74).string(message.type);
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

          message.interval = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.message = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.recoverNeedPeriodCount = reader.uint32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.targets.push(Target.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.title = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
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

  fromJSON(object: any): JsonScript {
    return {
      checkerOpt: isSet(object.checkerOpt) ? CheckerOpt.fromJSON(object.checkerOpt) : undefined,
      every: isSet(object.every) ? String(object.every) : "",
      groupBy: Array.isArray(object?.groupBy) ? object.groupBy.map((e: any) => String(e)) : [],
      interval: isSet(object.interval) ? Number(object.interval) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      recoverNeedPeriodCount: isSet(object.recoverNeedPeriodCount) ? Number(object.recoverNeedPeriodCount) : 0,
      targets: Array.isArray(object?.targets) ? object.targets.map((e: any) => Target.fromJSON(e)) : [],
      title: isSet(object.title) ? String(object.title) : "",
      type: isSet(object.type) ? String(object.type) : "",
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
    message.recoverNeedPeriodCount !== undefined &&
      (obj.recoverNeedPeriodCount = Math.round(message.recoverNeedPeriodCount));
    if (message.targets) {
      obj.targets = message.targets.map((e) => e ? Target.toJSON(e) : undefined);
    } else {
      obj.targets = [];
    }
    message.title !== undefined && (obj.title = message.title);
    message.type !== undefined && (obj.type = message.type);
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
    message.recoverNeedPeriodCount = object.recoverNeedPeriodCount ?? 0;
    message.targets = object.targets?.map((e) => Target.fromPartial(e)) || [];
    message.title = object.title ?? "";
    message.type = object.type ?? "";
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
