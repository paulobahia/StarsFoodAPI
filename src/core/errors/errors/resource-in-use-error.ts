import { UseCaseError } from '@/core/errors/use-case-error'

export class ResourceInUseError extends Error implements UseCaseError {
  constructor() {
    super('Resource in use')
  }
}
