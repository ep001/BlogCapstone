// the messages publicaction now takes a parameter
// so we can limit the set of messages
// that get sent to the client in one go.
Meteor.publish('messages.filtered',function (chatroomId) {
    if (this.userId){
        // HERE is another place for you to edit
        // put in a line that finds
        // and returns all messages that have chatroomId
        return Messages.find({chatroomId:Session.get("chatroomId")});
        // equal to the chatroomId sent into this function
        //chatroomId:Session.get("chatroomId")
    }
});


Meteor.publish("chatrooms", function(){
    if (this.userId){
        return Chatrooms.find({});
    }
});
