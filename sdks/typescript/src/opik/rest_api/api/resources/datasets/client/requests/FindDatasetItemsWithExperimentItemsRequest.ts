/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         experimentIds: "experiment_ids"
 *     }
 */
export interface FindDatasetItemsWithExperimentItemsRequest {
    page?: number;
    size?: number;
    experimentIds: string;
    filters?: string;
    truncate?: boolean;
}
