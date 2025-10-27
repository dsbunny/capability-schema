import * as z from "zod";
export declare const ErrorResponse: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
    detail: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type ErrorResponse = z.infer<typeof ErrorResponse>;
export declare const WebHookRequest: z.ZodObject<{
    ref_id: z.ZodString;
    class: z.ZodString;
}, z.core.$strip>;
export type WebHookRequest = z.infer<typeof WebHookRequest>;
export declare const WebHookResponse: z.ZodObject<{}, z.core.$strip>;
export type WebHookResponse = z.infer<typeof WebHookResponse>;
export declare const CreateVideoCapabilityRequest: z.ZodArray<z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
    mime_type: z.ZodLiteral<"video">;
    codec: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
}, z.core.$strip>>;
export type CreateVideoCapabilityRequest = z.infer<typeof CreateVideoCapabilityRequest>;
export declare const CreateVideoCapabilityResponse: z.ZodLiteral<"Created">;
export type CreateVideoCapabilityResponse = z.infer<typeof CreateVideoCapabilityResponse>;
export declare const CreateAudioCapabilityRequest: z.ZodArray<z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
    mime_type: z.ZodLiteral<"audio">;
    codec: z.ZodString;
    sample_rate: z.ZodNumber;
    channels: z.ZodString;
}, z.core.$strip>>;
export type CreateAudioCapabilityRequest = z.infer<typeof CreateAudioCapabilityRequest>;
export declare const CreateAudioCapabilityResponse: z.ZodLiteral<"Created">;
export type CreateAudioCapabilityResponse = z.infer<typeof CreateAudioCapabilityResponse>;
export declare const CreateImageCapabilityRequest: z.ZodArray<z.ZodObject<{
    mime_subtype: z.ZodString;
    is_supported: z.ZodBoolean;
    mime_type: z.ZodLiteral<"image">;
    width: z.ZodNumber;
    height: z.ZodNumber;
    is_smooth: z.ZodLiteral<false>;
    is_power_efficient: z.ZodLiteral<true>;
}, z.core.$strip>>;
export type CreateImageCapabilityRequest = z.infer<typeof CreateImageCapabilityRequest>;
export declare const CreateImageCapabilityResponse: z.ZodLiteral<"Created">;
export type CreateImageCapabilityResponse = z.infer<typeof CreateImageCapabilityResponse>;
export declare const GetVideoCapabiltiesRequest: z.ZodObject<{}, z.core.$strip>;
export type GetVideoCapabiltiesRequest = z.infer<typeof GetVideoCapabiltiesRequest>;
export declare const GetVideoCapabiltiesResponse: z.ZodObject<{
    capabilities: z.ZodArray<z.ZodIntersection<z.ZodDiscriminatedUnion<[z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>], "mime_type">, z.ZodObject<{
        tenant_id: z.ZodUUID;
        capability_id: z.ZodUUID;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
        row_number: z.ZodNumber;
    }, z.core.$strip>>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type GetVideoCapabiltiesResponse = z.infer<typeof GetVideoCapabiltiesResponse>;
export declare const GetAudioCapabiltiesRequest: z.ZodObject<{}, z.core.$strip>;
export type GetAudioCapabiltiesRequest = z.infer<typeof GetAudioCapabiltiesRequest>;
export declare const GetAudioCapabiltiesResponse: z.ZodObject<{
    capabilities: z.ZodArray<z.ZodIntersection<z.ZodDiscriminatedUnion<[z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>], "mime_type">, z.ZodObject<{
        tenant_id: z.ZodUUID;
        capability_id: z.ZodUUID;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
        row_number: z.ZodNumber;
    }, z.core.$strip>>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type GetAudioCapabiltiesResponse = z.infer<typeof GetAudioCapabiltiesResponse>;
export declare const GetImageCapabiltiesRequest: z.ZodObject<{}, z.core.$strip>;
export type GetImageCapabiltiesRequest = z.infer<typeof GetImageCapabiltiesRequest>;
export declare const GetImageCapabiltiesResponse: z.ZodObject<{
    capabilities: z.ZodArray<z.ZodIntersection<z.ZodDiscriminatedUnion<[z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>], "mime_type">, z.ZodObject<{
        tenant_id: z.ZodUUID;
        capability_id: z.ZodUUID;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
        row_number: z.ZodNumber;
    }, z.core.$strip>>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type GetImageCapabiltiesResponse = z.infer<typeof GetImageCapabiltiesResponse>;
