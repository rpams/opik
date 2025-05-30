/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";

export const MultipartUploadPart: core.serialization.ObjectSchema<
    serializers.MultipartUploadPart.Raw,
    OpikApi.MultipartUploadPart
> = core.serialization.object({
    eTag: core.serialization.property("e_tag", core.serialization.string()),
    partNumber: core.serialization.property("part_number", core.serialization.number()),
});

export declare namespace MultipartUploadPart {
    export interface Raw {
        e_tag: string;
        part_number: number;
    }
}
