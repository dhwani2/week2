//Extend the previous question by storing 
//all the post objects in an array and then printing out the array instead of printing
//them all individually.


let allPosts = [
	{
		postId: 12345,
		userName: "Samantha Fallahi",
		userProfilePic: ""/* image link here */,
		location: "Toronto, On" /* null if not chosen */,
		image: ""/* image link here */,
		caption: "Something pretentious and fake here" /* null if not entered */,
		likes: [122, 214130, 2389, 298, 212457, 87654, 28475283, 36356456465] /*an array of user ids*/,
		comments: [
			{commentId: 501, userId: 498, userName: "Parth Patel", comment: "I hate you"},
			{commentId: 511, userId: 72831, userName: "Not Parth Patel", comment: "I dont hate you"},
			{commentId: 581, userId: 498, userName: "Also Not Parth Patel", comment: "I also dont hate you"}
		]
	},
	{
		postId: 1234590,
		userName: "Rick Sanchez",
		userProfilePic: "" /* image link here */,
		location: "Far away from Jerry" /* null if not chosen */,
		image: ""/* image link here */,
		caption: "Wubba Lubba Dub Dub" /* null if not entered */,
		likes: [122, 214130, 2389, 298, 212457, 87654, 28475283] /*an array of user ids*/,
		comments: [
			{commentId: 3481, userId: 498, userName: "Parth Patel", comment: "I hate you"},
			{commentId: 32, userId: 72831, userName: "Not Parth Patel", comment: "I dont hate you"},
			{commentId: 31, userId: 498, userName: "Also Not Parth Patel", comment: "I also dont hate you"}
		]
	},
	{
		postId: 6785,
		userName: "Another Samantha Fallahi",
		userProfilePic: ""/* image link here */,
		location: "Tokyo, Japan" /* null if not chosen */,
		image: ""/* image link here */,
		caption: "Something pretentious and fake here" /* null if not entered */,
		likes: [298, 212457, 87654, 28475283] /*an array of user ids*/,
		comments: [
			{commentId: 801, userId: 498, userName: "Parth Patel", comment: "I hate you"},
			{commentId: 8371, userId: 72831, userName: "Not Parth Patel", comment: "I dont hate you"},
			{commentId: 841, userId: 498, userName: "Also Not Parth Patel", comment: "I also dont hate you"}
		]
	},
	{
		postId: 21,
		userName: "Seymour Butts",
		userProfilePic: "" /* image link here */,
		location: "Poopersville, On" /* null if not chosen */,
		image: "" /* image link here */,
		caption: "Something pretentious and fake here" /* null if not entered */,
		likes: [122, 214130, 2389] /*an array of user ids*/,
		comments: [
			{commentId: 11, userId: 498, userName: "Parth Patel", comment: "I hate you"},
			{commentId: 101, userId: 72831, userName: "Not Parth Patel", comment: "I dont hate you"},
			{commentId: 111, userId: 498, userName: "Also Not Parth Patel", comment: "I also dont hate you"}
		]
	},
	{
		postId: 1,
		userName: "Steve Rogers",
		userProfilePic: "" /* image link here */,
		location: null /* null if not chosen */,
		image: "" /* image link here */,
		caption: "Hello Instagram, help me find Bucky." /* null if not entered */,
		likes: [] /*an array of user ids*/,
		comments: [
			{commentId: 21, userId: 498, userName: "Parth Patel", comment: "I hate you"},
			{commentId: 211, userId: 72831, userName: "Not Parth Patel", comment: "I dont hate you"},
			{commentId: 230, userName: "Also Not Parth Patel", comment: "I also dont hate you"}
		]
	},
]


let resultsCopy = [];

// number of likes is changeable
result.forEach(function(result) {
    result.likes.push(9999, 4444);
    resultsCopy.push(result);
});

console.log("Copy: ", resultsCopy);