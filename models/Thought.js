const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ResponseSchema = new Schema(
    {
        responseId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        responseBody: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createAt: {
            type: Date,
            default: Date.now,
            //get: createAtVal => moment(createAtVal).format('MM DD, YYYY [at] hh:mm')
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createAt: {
            type: Date,
            default: Date.now,
            //get: createAtVal => dateFormat(createAtVal).format('MM DD, YYYY [at] hh:mm')
        },
        username: {
            type: String,
            require: true,
            ref: 'User'
        },
        responses: [ResponseSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

const Thought = model('Thought', ThoughtSchema);

ThoughtSchema.virtual('responseCount').get(function() {
    return this.responses.length;
});

module.exports = Thought;