import { z } from 'zod';
export declare const CapabilityBase: z.ZodObject<{
    mime_type: z.ZodString;
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
}, {}, {}>;
export type CapabilityBase = z.infer<typeof CapabilityBase>;
export declare const CapabilityVideo: z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
    mime_type: z.ZodLiteral<"video">;
    codec: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
}, {}, {}>;
export type CapabilityVideo = z.infer<typeof CapabilityVideo>;
export declare const CapabilityAudio: z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
    mime_type: z.ZodLiteral<"audio">;
    codec: z.ZodString;
    sample_rate: z.ZodNumber;
    channels: z.ZodString;
}, {}, {}>;
export type CapabilityAudio = z.infer<typeof CapabilityAudio>;
export declare const CapabilityImage: z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    mime_type: z.ZodLiteral<"image">;
    width: z.ZodNumber;
    height: z.ZodNumber;
    is_smooth: z.ZodLiteral<false>;
    is_power_efficient: z.ZodLiteral<true>;
}, {}, {}>;
export type CapabilityImage = z.infer<typeof CapabilityImage>;
export declare const CapabilityMetadata: z.ZodObject<{
    tenant_id: z.ZodUUID;
    capability_id: z.ZodUUID;
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    row_number: z.ZodNumber;
}, {}, {}>;
export declare const CapabilityTypes: z.ZodDiscriminatedUnion<[z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
    mime_type: z.ZodLiteral<"video">;
    codec: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
}, {}, {}>, z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
    mime_type: z.ZodLiteral<"audio">;
    codec: z.ZodString;
    sample_rate: z.ZodNumber;
    channels: z.ZodString;
}, {}, {}>, z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    mime_type: z.ZodLiteral<"image">;
    width: z.ZodNumber;
    height: z.ZodNumber;
    is_smooth: z.ZodLiteral<false>;
    is_power_efficient: z.ZodLiteral<true>;
}, {}, {}>]>;
export type CapabilityTypes = z.infer<typeof CapabilityTypes>;
export declare const Capability: z.ZodIntersection<z.ZodDiscriminatedUnion<[z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
    mime_type: z.ZodLiteral<"video">;
    codec: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
}, {}, {}>, z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
    mime_type: z.ZodLiteral<"audio">;
    codec: z.ZodString;
    sample_rate: z.ZodNumber;
    channels: z.ZodString;
}, {}, {}>, z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    mime_type: z.ZodLiteral<"image">;
    width: z.ZodNumber;
    height: z.ZodNumber;
    is_smooth: z.ZodLiteral<false>;
    is_power_efficient: z.ZodLiteral<true>;
}, {}, {}>]>, z.ZodObject<{
    tenant_id: z.ZodUUID;
    capability_id: z.ZodUUID;
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    row_number: z.ZodNumber;
}, {}, {}>>;
export type Capability = z.infer<typeof Capability>;
export declare const DbDtoFromCapability: z.ZodPipe<z.ZodIntersection<z.ZodDiscriminatedUnion<[z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
    mime_type: z.ZodLiteral<"video">;
    codec: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
}, {}, {}>, z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
    mime_type: z.ZodLiteral<"audio">;
    codec: z.ZodString;
    sample_rate: z.ZodNumber;
    channels: z.ZodString;
}, {}, {}>, z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    mime_type: z.ZodLiteral<"image">;
    width: z.ZodNumber;
    height: z.ZodNumber;
    is_smooth: z.ZodLiteral<false>;
    is_power_efficient: z.ZodLiteral<true>;
}, {}, {}>]>, z.ZodObject<{
    tenant_id: z.ZodUUID;
    capability_id: z.ZodUUID;
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    row_number: z.ZodNumber;
}, {}, {}>>, z.ZodTransform<{
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
    mime_subtype: string;
    is_supported: boolean;
    is_smooth: boolean;
    is_power_efficient: boolean;
    mime_type: "video";
    codec: string;
    width: number;
    height: number;
    frame_rate: number;
} | {
    mime_subtype: string;
    is_supported: boolean;
    is_smooth: boolean;
    is_power_efficient: boolean;
    mime_type: "audio";
    codec: string;
    sample_rate: number;
    channels: string;
} | {
    mime_subtype: string;
    is_supported: boolean;
    mime_type: "image";
    width: number;
    height: number;
    is_smooth: false;
    is_power_efficient: true;
}) & {
    tenant_id: string;
    capability_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    row_number: number;
}>>;
export declare const DbDtoToCapability: z.ZodPipe<z.ZodObject<{
    capability_id: z.ZodUUID;
    tenant_id: z.ZodUUID;
    mime_type: z.ZodString;
    mime_subtype: z.ZodString;
    detail: z.ZodString;
    is_supported: z.ZodDefault<z.ZodNumber>;
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
    row_number: z.ZodNumber;
}, {}, {}>, z.ZodTransform<({
    mime_subtype: string;
    is_supported: boolean;
    is_smooth: boolean;
    is_power_efficient: boolean;
    mime_type: "video";
    codec: string;
    width: number;
    height: number;
    frame_rate: number;
} & {
    tenant_id: string;
    capability_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    row_number: number;
}) | ({
    mime_subtype: string;
    is_supported: boolean;
    is_smooth: boolean;
    is_power_efficient: boolean;
    mime_type: "audio";
    codec: string;
    sample_rate: number;
    channels: string;
} & {
    tenant_id: string;
    capability_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    row_number: number;
}) | ({
    mime_subtype: string;
    is_supported: boolean;
    mime_type: "image";
    width: number;
    height: number;
    is_smooth: false;
    is_power_efficient: true;
} & {
    tenant_id: string;
    capability_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    row_number: number;
}), {
    capability_id: string;
    tenant_id: string;
    mime_type: string;
    mime_subtype: string;
    detail: string;
    is_supported: number;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
    row_number: number;
}>>;
