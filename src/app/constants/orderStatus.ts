/**
 * Represents the status of an order.
 */
export enum OrderStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  CANCELLED = 'Cancelled',
  PROCESSING = 'Processing',
  DISPATCHED = 'Dispatched',
}

/**
 * Enum representing the tailwind color classes associated with different order statuses.
 */
export enum OrderStatusColors {
  PENDING = 'warning',
  APPROVED = 'secondary',
  CANCELLED = 'danger',
  PROCESSING = 'primary',
  DISPATCHED = 'success',
}
