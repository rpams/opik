/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";

export const JsonListString: core.serialization.Schema<serializers.JsonListString.Raw, OpikApi.JsonListString> =
    core.serialization.undiscriminatedUnion([
        core.serialization.record(core.serialization.string(), core.serialization.unknown()),
        core.serialization.list(core.serialization.record(core.serialization.string(), core.serialization.unknown())),
        core.serialization.string(),
    ]);

export declare namespace JsonListString {
    export type Raw = Record<string, unknown> | Record<string, unknown>[] | string;
}
