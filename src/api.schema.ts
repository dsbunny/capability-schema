// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { 
	Capability, 
	CapabilityAudio, 
	CapabilityImage, 
	CapabilityVideo, 
} from './capability.schema.js';

// #region Errors
export const ErrorResponse = z.object({
	code: z.string()
		.describe('Error code representing the type of error.'),
	message: z.string()
		.describe('Error message describing the issue.'),
	detail: z.string()
		.describe('Additional details about the error, if available.'),
	timestamp: z.iso.datetime()
		.describe('Timestamp when the error occurred (ISO_8601 format).'),
})
	.describe('Error response schema');
export type ErrorResponse = z.infer<typeof ErrorResponse>;
// #endregion

// #region WebHook
export const WebHookRequest = z.object({
	ref_id: z.string(),
	class: z.string(),
})
	  .describe('WebHook request schema');
export type WebHookRequest = z.infer<typeof WebHookRequest>;

export const WebHookResponse = z.object({})
	  .describe('WebHook response schema');
export type WebHookResponse = z.infer<typeof WebHookResponse>;
// #endregion

// #region Capabilities
export const CreateVideoCapabilityRequest = z.array(CapabilityVideo)
	.describe('Create video capability request schema');
export type CreateVideoCapabilityRequest = z.infer<typeof CreateVideoCapabilityRequest>;
export const CreateVideoCapabilityResponse = z.literal("Created")
	.describe('Create video capability response schema');
export type CreateVideoCapabilityResponse = z.infer<typeof CreateVideoCapabilityResponse>;

export const CreateAudioCapabilityRequest = z.array(CapabilityAudio)
	.describe('Create audio capability request schema');
export type CreateAudioCapabilityRequest = z.infer<typeof CreateAudioCapabilityRequest>;
export const CreateAudioCapabilityResponse = z.literal("Created")
	.describe('Create audio capability response schema');
export type CreateAudioCapabilityResponse = z.infer<typeof CreateAudioCapabilityResponse>;

export const CreateImageCapabilityRequest = z.array(CapabilityImage)
	.describe('Create image capability request schema');
export type CreateImageCapabilityRequest = z.infer<typeof CreateImageCapabilityRequest>;
export const CreateImageCapabilityResponse = z.literal("Created")
	.describe('Create image capability response schema');
export type CreateImageCapabilityResponse = z.infer<typeof CreateImageCapabilityResponse>;

export const GetVideoCapabiltiesRequest = z.object({})
	.describe('Get video capabilities request schema');
export type GetVideoCapabiltiesRequest = z.infer<typeof GetVideoCapabiltiesRequest>;
export const GetVideoCapabiltiesResponse = z.object({
	capabilities: z.array(Capability)
		.describe('Array of video capabilities retrieved.'),
	next_token: z.string().nullable()
		.describe('Token for pagination, null if no more results.'),
})
	.describe('Get video capabilities response schema');
export type GetVideoCapabiltiesResponse = z.infer<typeof GetVideoCapabiltiesResponse>;

export const GetAudioCapabiltiesRequest = z.object({})
	.describe('Get audio capabilities request schema');
export type GetAudioCapabiltiesRequest = z.infer<typeof GetAudioCapabiltiesRequest>;
export const GetAudioCapabiltiesResponse = z.object({
	capabilities: z.array(Capability)
		.describe('Array of audio capabilities retrieved.'),
	next_token: z.string().nullable()
		.describe('Token for pagination, null if no more results.'),
})
	.describe('Get audio capabilities response schema');
export type GetAudioCapabiltiesResponse = z.infer<typeof GetAudioCapabiltiesResponse>;

export const GetImageCapabiltiesRequest = z.object({})
	.describe('Get image capabilities request schema');
export type GetImageCapabiltiesRequest = z.infer<typeof GetImageCapabiltiesRequest>;
export const GetImageCapabiltiesResponse = z.object({
	capabilities: z.array(Capability)
		.describe('Array of image capabilities retrieved.'),
	next_token: z.string().nullable()
		.describe('Token for pagination, null if no more results.'),
})
	.describe('Get image capabilities response schema');
export type GetImageCapabiltiesResponse = z.infer<typeof GetImageCapabiltiesResponse>;
// #endregion
