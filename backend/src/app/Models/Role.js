
/**
 * @swagger
*components:
*  schemas:
*    Role:
*      type: object
*      required:
*        - name
*      properties:
*        name:
*          type: string
*        description:
*          type: string
*        permission:
*          type: array
*          required: true
*          items:
*            $ref: '#/components/schemas/Permission'
*/

const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const roleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    permissions: [{
        type: Types.ObjectId,
        ref: 'Permission',
    }],
});

mongoose.model('Role', roleSchema);
