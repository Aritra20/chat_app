var socket = io();
socket.on("connect",function(){
	console.log("connected to the server");
	socket.emit("createMessage",
	{
		from:"Aritra",
		text:"yup thats worked for me."
	});
});
socket.on("disconnect",function(){
console.log("disconnected from server")
});
socket.on("newMessage",function(message){
	console.log("newMessage",message);
})