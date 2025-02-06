import { type SchemaTypeDefinition } from 'sanity'
import { comment } from './comments'
import carSchema from './car'
import userSchema from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [carSchema,comment,userSchema],
}
