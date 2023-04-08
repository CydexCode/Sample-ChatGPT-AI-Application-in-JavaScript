function main()
{
    //Get all the data from the input box
    var TextBox_val= document.getElementById("InputBox").value;

    //Get all the data from the response text
    var ResponseText_val = document.getElementById("ResponseText");

    //Get all the data from the user input box
    var UserInputText_val = document.getElementById("UserInputText");

    //Convert our given input to lowercase,ex Google -> google
    var FormatInput = TextBox_val.toLowerCase().trim();


    //chat logic
    if(FormatInput.includes("hi")||FormatInput.includes("hello"))
    {
        ResponseText_val.innerHTML = "Hello! How can i assist you today?";
    }

    else if (FormatInput.includes("what is chatgpt"))
    {
        ResponseText_val.innerHTML = "I am ChatGPT, a large language model developed by OpenAI. I am designed to understand and generate human-like language, which allows me to communicate with people and respond to their questions and requests in a conversational manner.";
    }

    //let's open website
    else if(FormatInput.includes("open google")) 
    {
        ResponseText_val.innerHTML = "Opening Google";
        window.open("https://www.google.com","_blank");
    }

    else if(FormatInput.includes("open code cave youtube channel")) 
    {
        ResponseText_val.innerHTML = "Opening Code Cave Youtube Channel";
        window.open("https://www.youtube.com/@codecave.","_blank");
    }

    else
    {
        ResponseText_val.innerHTML = "I'm sorry,I don't understand what you are trying to say,Can you please provide more or clarity your message"
    }

    //Set the user input text box value to the user's input text
    UserInputText_val.innerHTML = TextBox_val;

    //Clear the input box after enter message
    document.getElementById("InputBox").value="";

}