Messages = new Mongo.Collection("messages");
Chatrooms = new Mongo.Collection("chatrooms");
Days = new Mongo.Collection("days");

// set up a schema controlling the allowable
// structure of Chatroom objects
Chatrooms.attachSchema(new SimpleSchema({
    date: {
        type: String,
        label: "Date",
        max: 200
    },
    description: {
        type: String,
        label: "How did it go?",
        max: 10000,
        autoform: {
         rows: 5}
    },
    mood: {
        type: String,
        label: "Mood",
        max: 200
    },
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    createdOn: {
        type: Date,
        autoform: {
            type: "hidden",
            label: false
        },
        defaultValue: new Date(),
    },
    createdBy: {
        type: String,
        autoform: {
            type: "hidden",
            label: false
        },
        defaultValue: 'anon'
    }
}));

Messages.attachSchema(new SimpleSchema({
    messageText: {
        type: String,
        label: "Message",
        max: 200
    },
    nickname: {
        type: String,
        autoform: {
            type: "hidden",
            label: false
        },
        defaultValue: '0'
    },
    createdOn: {
        type: Date,
        autoform: {
            type: "hidden",
            label: false
        },
        defaultValue: new Date(),
    },
    chatroomId: {
        type: String,
        autoform: {
            type: "hidden",
            label: false
        },
        defaultValue: '0'
    },

}));
