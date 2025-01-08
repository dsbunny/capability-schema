// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod';
import { sqliteDateSchema } from './sqlite-date.schema.js';

export const CapabilityBase = z.object({
	tenant_id: z.string().uuid()
		.describe('The UUID of the tenant'),
	width: z.number().int().min(1).max(10000)
		.describe('Maximum width of the capability'),
	height: z.number().int().min(1).max(10000)
		.describe('Maximum height of the capability'),
	fps: z.number().int().min(1).max(1000)
		.describe('Maximum frames per second of the capability'),
	codec: z.string().min(3).max(512)
		.describe('The RFC-6381 codec of the capability'),
	is_supported: z.boolean()
		.describe('Whether the capability is supported'),
	is_smooth: z.boolean()
		.describe('Whether the capability is smooth'),
	is_power_efficient: z.boolean()
		.describe('Whether the capability is power efficient'),
});
export type CapabilityBase = z.infer<typeof CapabilityBase>;

export const CapabilityMetadata = z.object({
	capability_id: z.string().uuid()
		.describe('The UUID of the capability'),
	create_timestamp: z.string().datetime()  // ISO 8601
		.describe('The timestamp of when the capability was created'),
	modify_timestamp: z.string().datetime()
		.describe('The timestamp of when the capability was last modified'),
	is_deleted: z.boolean().default(false)
		.describe('Whether the capability is deleted'),
	row_number: z.number().int()
		.describe('The row number of the capability'),
});

export const Capability = CapabilityBase.merge(CapabilityMetadata);
export type Capability = z.infer<typeof Capability>;

export const DbDtoToCapability = z.object({
	capability_id: z.string().uuid(),
	tenant_id: z.string().uuid(),
	width: z.number().int(),
	height: z.number().int(),
	fps: z.number().int().min(1).max(1000),
	codec: z.string().min(3).max(512),
	is_supported: z.number().default(0),
	is_smooth: z.number().default(0),
	is_power_efficient: z.number().default(0),
	create_timestamp: sqliteDateSchema,
	modify_timestamp: sqliteDateSchema,
	is_deleted: z.number().default(0),
	row_number: z.number().int(),
})
.transform((dto, ctx): Capability => {
	return {
		...dto,
		is_supported: Boolean(dto.is_supported),
		is_smooth: Boolean(dto.is_smooth),
		is_power_efficient: Boolean(dto.is_power_efficient),
		is_deleted: Boolean(dto.is_deleted),
	};
});
