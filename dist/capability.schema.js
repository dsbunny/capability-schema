// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod';
import { sqliteDateSchema } from './sqlite-date.schema.js';
import { jsonSafeParser } from './json-safe-parser.js';
export const CapabilityBase = z.object({
    mime_type: z.string().min(3).max(512)
        .describe('The MIME type of the capability'),
    mime_subtype: z.string().min(3).max(512)
        .describe('The MIME subtype of the capability'),
    is_supported: z.boolean()
        .describe('Whether the capability is supported'),
});
export const CapabilityVideo = CapabilityBase.merge(z.object({
    mime_type: z.literal('video'),
    codec: z.string().min(3).max(512)
        .describe('The RFC-6381 codec of the capability'),
    width: z.number().int().min(1).max(10000)
        .describe('Maximum width of the capability'),
    height: z.number().int().min(1).max(10000)
        .describe('Maximum height of the capability'),
    fps: z.number().int().min(1).max(1000)
        .describe('Maximum frames per second of the capability'),
    is_smooth: z.boolean()
        .describe('Whether the capability is smooth'),
    is_power_efficient: z.boolean()
        .describe('Whether the capability is power efficient'),
}))
    .describe('The video capability');
export const CapabilityAudio = CapabilityBase.merge(z.object({
    mime_type: z.literal('audio'),
    codec: z.string().min(3).max(512)
        .describe('The RFC-6381 codec of the capability'),
    // Typically 8kHz to 48kHz, although only frequencies up to 20 kHz are
    // audible.  96 kHz and 192 kHz are used for professional audio.
    sample_rate: z.number().int().min(1).max(192000)
        .describe('Maximum sample rate of the capability'),
    // An integer can obviously cannot support 5.1 surround sound, but it can
    // support stereo sound.
    channels: z.number().int().min(1).max(32)
        .describe('Maximum number of channels of the capability'),
}))
    .describe('The audio capability');
export const CapabilityImage = CapabilityBase.merge(z.object({
    mime_type: z.literal('image'),
    width: z.number().int().min(1).max(65535)
        .describe('Maximum width of the capability'),
    height: z.number().int().min(1).max(65535)
        .describe('Maximum height of the capability'),
}))
    .describe('The image capability');
export const CapabilityMetadata = z.object({
    tenant_id: z.string().uuid()
        .describe('The UUID of the tenant'),
    capability_id: z.string().uuid()
        .describe('The UUID of the capability'),
    create_timestamp: z.string().datetime() // ISO 8601
        .describe('The timestamp of when the capability was created'),
    modify_timestamp: z.string().datetime()
        .describe('The timestamp of when the capability was last modified'),
    is_deleted: z.boolean().default(false)
        .describe('Whether the capability is deleted'),
    row_number: z.number().int()
        .describe('The row number of the capability'),
});
export const CapabilityTypes = z.discriminatedUnion('mime_type', [
    CapabilityVideo,
    CapabilityAudio,
    CapabilityImage,
]);
export const Capability = z.intersection(CapabilityTypes, CapabilityMetadata);
export const DbDtoFromCapability = Capability.transform((capability, ctx) => {
    let detail;
    if (capability.mime_type === 'video') {
        detail = JSON.stringify({
            codec: capability.codec,
            width: capability.width,
            height: capability.height,
            fps: capability.fps,
            is_smooth: capability.is_smooth,
            is_power_efficient: capability.is_power_efficient,
        });
    }
    else if (capability.mime_type === 'audio') {
        detail = JSON.stringify({
            codec: capability.codec,
            sample_rate: capability.sample_rate,
            channels: capability.channels,
        });
    }
    else if (capability.mime_type === 'image') {
        detail = JSON.stringify({
            width: capability.width,
            height: capability.height,
        });
    }
    else {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Invalid mime type',
            fatal: true,
        });
        return z.NEVER;
    }
    return {
        capability_id: capability.capability_id,
        tenant_id: capability.tenant_id,
        mime_type: capability.mime_type,
        mime_subtype: capability.mime_subtype,
        detail,
        is_supported: capability.is_supported,
        create_timestamp: capability.create_timestamp,
        modify_timestamp: capability.modify_timestamp,
        is_deleted: capability.is_deleted,
        row_number: capability.row_number,
    };
});
export const DbDtoToCapability = z.object({
    capability_id: z.string().uuid(),
    tenant_id: z.string().uuid(),
    mime_type: z.string().min(3).max(512),
    mime_subtype: z.string().min(3).max(512),
    detail: z.string().min(3).max(512),
    is_supported: z.number().default(0),
    create_timestamp: sqliteDateSchema,
    modify_timestamp: sqliteDateSchema,
    is_deleted: z.number().default(0),
    row_number: z.number().int(),
})
    .transform((dto, ctx) => {
    if (dto.mime_type === 'video') {
        const detail = jsonSafeParser(CapabilityVideo).safeParse(dto.detail);
        if (!detail.success) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Failed to parse video capability',
                fatal: true,
            });
            return z.NEVER;
        }
        return {
            ...detail.data,
            tenant_id: dto.tenant_id,
            capability_id: dto.capability_id,
            create_timestamp: dto.create_timestamp,
            modify_timestamp: dto.modify_timestamp,
            is_deleted: Boolean(dto.is_deleted),
            row_number: dto.row_number,
        };
    }
    else if (dto.mime_type === 'audio') {
        const detail = jsonSafeParser(CapabilityAudio).safeParse(dto.detail);
        if (!detail.success) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Failed to parse audio capability',
                fatal: true,
            });
            return z.NEVER;
        }
        return {
            ...detail.data,
            tenant_id: dto.tenant_id,
            capability_id: dto.capability_id,
            create_timestamp: dto.create_timestamp,
            modify_timestamp: dto.modify_timestamp,
            is_deleted: Boolean(dto.is_deleted),
            row_number: dto.row_number,
        };
    }
    else if (dto.mime_type === 'image') {
        const detail = jsonSafeParser(CapabilityImage).safeParse(dto.detail);
        if (!detail.success) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Failed to parse image capability',
                fatal: true,
            });
            return z.NEVER;
        }
        return {
            ...detail.data,
            tenant_id: dto.tenant_id,
            capability_id: dto.capability_id,
            create_timestamp: dto.create_timestamp,
            modify_timestamp: dto.modify_timestamp,
            is_deleted: Boolean(dto.is_deleted),
            row_number: dto.row_number,
        };
    }
    ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid mime type',
        fatal: true,
    });
    return z.NEVER;
});
//# sourceMappingURL=capability.schema.js.map