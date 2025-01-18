import { z } from 'zod';
export declare const CapabilityBase: z.ZodObject<{
    mime_type: z.ZodString;
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    mime_type: string;
    mime_subtype: string;
    is_supported: boolean;
}, {
    mime_type: string;
    mime_subtype: string;
    is_supported: boolean;
}>;
export type CapabilityBase = z.infer<typeof CapabilityBase>;
export declare const CapabilityVideo: z.ZodObject<z.objectUtil.extendShape<{
    mime_type: z.ZodString;
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
}, {
    mime_type: z.ZodLiteral<"video">;
    codec: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    fps: z.ZodNumber;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
}>, "strip", z.ZodTypeAny, {
    mime_type: "video";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    width: number;
    height: number;
    fps: number;
    is_smooth: boolean;
    is_power_efficient: boolean;
}, {
    mime_type: "video";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    width: number;
    height: number;
    fps: number;
    is_smooth: boolean;
    is_power_efficient: boolean;
}>;
export type CapabilityVideo = z.infer<typeof CapabilityVideo>;
export declare const CapabilityAudio: z.ZodObject<z.objectUtil.extendShape<{
    mime_type: z.ZodString;
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
}, {
    mime_type: z.ZodLiteral<"audio">;
    codec: z.ZodString;
    sample_rate: z.ZodNumber;
    channels: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    mime_type: "audio";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    sample_rate: number;
    channels: number;
}, {
    mime_type: "audio";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    sample_rate: number;
    channels: number;
}>;
export type CapabilityAudio = z.infer<typeof CapabilityAudio>;
export declare const CapabilityImage: z.ZodObject<z.objectUtil.extendShape<{
    mime_type: z.ZodString;
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
}, {
    mime_type: z.ZodLiteral<"image">;
    width: z.ZodNumber;
    height: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    mime_type: "image";
    mime_subtype: string;
    is_supported: boolean;
    width: number;
    height: number;
}, {
    mime_type: "image";
    mime_subtype: string;
    is_supported: boolean;
    width: number;
    height: number;
}>;
export type CapabilityImage = z.infer<typeof CapabilityImage>;
export declare const CapabilityMetadata: z.ZodObject<{
    tenant_id: z.ZodString;
    capability_id: z.ZodString;
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    row_number: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    tenant_id: string;
    capability_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    row_number: number;
}, {
    tenant_id: string;
    capability_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    row_number: number;
    is_deleted?: boolean | undefined;
}>;
export declare const CapabilityTypes: z.ZodDiscriminatedUnion<"mime_type", [z.ZodObject<z.objectUtil.extendShape<{
    mime_type: z.ZodString;
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
}, {
    mime_type: z.ZodLiteral<"video">;
    codec: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    fps: z.ZodNumber;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
}>, "strip", z.ZodTypeAny, {
    mime_type: "video";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    width: number;
    height: number;
    fps: number;
    is_smooth: boolean;
    is_power_efficient: boolean;
}, {
    mime_type: "video";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    width: number;
    height: number;
    fps: number;
    is_smooth: boolean;
    is_power_efficient: boolean;
}>, z.ZodObject<z.objectUtil.extendShape<{
    mime_type: z.ZodString;
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
}, {
    mime_type: z.ZodLiteral<"audio">;
    codec: z.ZodString;
    sample_rate: z.ZodNumber;
    channels: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    mime_type: "audio";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    sample_rate: number;
    channels: number;
}, {
    mime_type: "audio";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    sample_rate: number;
    channels: number;
}>, z.ZodObject<z.objectUtil.extendShape<{
    mime_type: z.ZodString;
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
}, {
    mime_type: z.ZodLiteral<"image">;
    width: z.ZodNumber;
    height: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    mime_type: "image";
    mime_subtype: string;
    is_supported: boolean;
    width: number;
    height: number;
}, {
    mime_type: "image";
    mime_subtype: string;
    is_supported: boolean;
    width: number;
    height: number;
}>]>;
export type CapabilityTypes = z.infer<typeof CapabilityTypes>;
export declare const Capability: z.ZodIntersection<z.ZodDiscriminatedUnion<"mime_type", [z.ZodObject<z.objectUtil.extendShape<{
    mime_type: z.ZodString;
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
}, {
    mime_type: z.ZodLiteral<"video">;
    codec: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    fps: z.ZodNumber;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
}>, "strip", z.ZodTypeAny, {
    mime_type: "video";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    width: number;
    height: number;
    fps: number;
    is_smooth: boolean;
    is_power_efficient: boolean;
}, {
    mime_type: "video";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    width: number;
    height: number;
    fps: number;
    is_smooth: boolean;
    is_power_efficient: boolean;
}>, z.ZodObject<z.objectUtil.extendShape<{
    mime_type: z.ZodString;
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
}, {
    mime_type: z.ZodLiteral<"audio">;
    codec: z.ZodString;
    sample_rate: z.ZodNumber;
    channels: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    mime_type: "audio";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    sample_rate: number;
    channels: number;
}, {
    mime_type: "audio";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    sample_rate: number;
    channels: number;
}>, z.ZodObject<z.objectUtil.extendShape<{
    mime_type: z.ZodString;
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
}, {
    mime_type: z.ZodLiteral<"image">;
    width: z.ZodNumber;
    height: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    mime_type: "image";
    mime_subtype: string;
    is_supported: boolean;
    width: number;
    height: number;
}, {
    mime_type: "image";
    mime_subtype: string;
    is_supported: boolean;
    width: number;
    height: number;
}>]>, z.ZodObject<{
    tenant_id: z.ZodString;
    capability_id: z.ZodString;
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    row_number: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    tenant_id: string;
    capability_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    row_number: number;
}, {
    tenant_id: string;
    capability_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    row_number: number;
    is_deleted?: boolean | undefined;
}>>;
export type Capability = z.infer<typeof Capability>;
export declare const DbDtoFromCapability: z.ZodEffects<z.ZodIntersection<z.ZodDiscriminatedUnion<"mime_type", [z.ZodObject<z.objectUtil.extendShape<{
    mime_type: z.ZodString;
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
}, {
    mime_type: z.ZodLiteral<"video">;
    codec: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    fps: z.ZodNumber;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
}>, "strip", z.ZodTypeAny, {
    mime_type: "video";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    width: number;
    height: number;
    fps: number;
    is_smooth: boolean;
    is_power_efficient: boolean;
}, {
    mime_type: "video";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    width: number;
    height: number;
    fps: number;
    is_smooth: boolean;
    is_power_efficient: boolean;
}>, z.ZodObject<z.objectUtil.extendShape<{
    mime_type: z.ZodString;
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
}, {
    mime_type: z.ZodLiteral<"audio">;
    codec: z.ZodString;
    sample_rate: z.ZodNumber;
    channels: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    mime_type: "audio";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    sample_rate: number;
    channels: number;
}, {
    mime_type: "audio";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    sample_rate: number;
    channels: number;
}>, z.ZodObject<z.objectUtil.extendShape<{
    mime_type: z.ZodString;
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
}, {
    mime_type: z.ZodLiteral<"image">;
    width: z.ZodNumber;
    height: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    mime_type: "image";
    mime_subtype: string;
    is_supported: boolean;
    width: number;
    height: number;
}, {
    mime_type: "image";
    mime_subtype: string;
    is_supported: boolean;
    width: number;
    height: number;
}>]>, z.ZodObject<{
    tenant_id: z.ZodString;
    capability_id: z.ZodString;
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    row_number: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    tenant_id: string;
    capability_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    row_number: number;
}, {
    tenant_id: string;
    capability_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    row_number: number;
    is_deleted?: boolean | undefined;
}>>, {
    capability_id: string;
    tenant_id: string;
    mime_type: "video" | "audio" | "image";
    mime_subtype: string;
    detail: string;
    is_supported: boolean;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    row_number: number;
}, ({
    mime_type: "video";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    width: number;
    height: number;
    fps: number;
    is_smooth: boolean;
    is_power_efficient: boolean;
} | {
    mime_type: "audio";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    sample_rate: number;
    channels: number;
} | {
    mime_type: "image";
    mime_subtype: string;
    is_supported: boolean;
    width: number;
    height: number;
}) & {
    tenant_id: string;
    capability_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    row_number: number;
    is_deleted?: boolean | undefined;
}>;
export declare const DbDtoToCapability: z.ZodEffects<z.ZodObject<{
    capability_id: z.ZodString;
    tenant_id: z.ZodString;
    mime_type: z.ZodString;
    mime_subtype: z.ZodString;
    detail: z.ZodString;
    is_supported: z.ZodDefault<z.ZodNumber>;
    create_timestamp: z.ZodEffects<z.ZodString, string, string>;
    modify_timestamp: z.ZodEffects<z.ZodString, string, string>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
    row_number: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    mime_type: string;
    mime_subtype: string;
    is_supported: number;
    tenant_id: string;
    capability_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
    row_number: number;
    detail: string;
}, {
    mime_type: string;
    mime_subtype: string;
    tenant_id: string;
    capability_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    row_number: number;
    detail: string;
    is_supported?: number | undefined;
    is_deleted?: number | undefined;
}>, ({
    mime_type: "video";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    width: number;
    height: number;
    fps: number;
    is_smooth: boolean;
    is_power_efficient: boolean;
} & {
    tenant_id: string;
    capability_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    row_number: number;
}) | ({
    mime_type: "audio";
    mime_subtype: string;
    is_supported: boolean;
    codec: string;
    sample_rate: number;
    channels: number;
} & {
    tenant_id: string;
    capability_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    row_number: number;
}) | ({
    mime_type: "image";
    mime_subtype: string;
    is_supported: boolean;
    width: number;
    height: number;
} & {
    tenant_id: string;
    capability_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    row_number: number;
}), {
    mime_type: string;
    mime_subtype: string;
    tenant_id: string;
    capability_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    row_number: number;
    detail: string;
    is_supported?: number | undefined;
    is_deleted?: number | undefined;
}>;
