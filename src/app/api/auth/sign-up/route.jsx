import axios from 'axios';

const apiKey = process.env.REST_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_REST_API_URL;

export async function POST(request) {
    try {
        const requestBody = await request.text();
        const { email, password, name, phone } = JSON.parse(requestBody); // Extracting name and phone if needed
        
        // Construct the URL for registration
        const registerUrl = `${apiUrl}auth/local/register`;

        // Make the POST request using axios
        const response = await axios.post(registerUrl, {
            username: email, // Strapi expects a username, email, and password
            email: email,
            password: password,
            // Add any additional fields required by your Strapi schema
            name: name,
            phone: phone,
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            }
        });

        // Success: Log and return the response data
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);

        return new Response(JSON.stringify({
            message: "Success: User was created",
            user: response.data.user,
            jwt: response.data.jwt
        }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        // Log the error
        console.error('An error occurred:', error.response ? error.response : error.message);

        // Handle specific errors from Strapi (e.g., email already exists)
        const errorMessage = error.response && error.response.data && error.response.data.message
            ? error.response.data.message[0].messages[0].message
            : error.message;

        // Return a response indicating failure
        return new Response(JSON.stringify({
            message: "COULD NOT CREATE USER",
            error: errorMessage,
        }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
