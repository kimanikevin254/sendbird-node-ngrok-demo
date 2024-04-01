# Sendbird Node.js ngrok Demo

## Prerequisites

-   [Node.js](https://nodejs.org/en/download) installed on your local machine
-   A [ngrok](https://ngrok.com/signup) account
-   A code editor and a web browser

## Configure ngrok

1. Install ngrok by [downloading the ngrok agent from the official website](https://ngrok.com/download) or use the terminal:

    - For Mac OS:
        ```bash
        brew install ngrok/ngrok/ngrok
        ```
    - For Debian Linux:
        ```
        curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | \
            sudo gpg --dearmor -o /etc/apt/keyrings/ngrok.gpg && \
            echo "deb [signed-by=/etc/apt/keyrings/ngrok.gpg] https://ngrok-agent.s3.amazonaws.com buster main" | \
            sudo tee /etc/apt/sources.list.d/ngrok.list && \
            sudo apt update && sudo apt install ngrok
        ```
    - For Windows:
        ```bash
        choco install ngrok
        ```

2. Grab your auth token from the [ngrok dashboard](https://dashboard.ngrok.com/get-started/your-authtoken) and execute the following command in your terminal to connect your ngrok agent to your ngrok account.

    ```bash
    ngrok config add-authtoken <YOUR-AUTH-TOKEN>
    ```

    > Replace `<YOUR-TOKEN-TOKEN>` with the value you just copied from the dashboard.

## Run the Application Locally

1. Clone the repo:

    ```bash
    git clone https://github.com/kimanikevin254/sendbird-node-ngrok-demo
    ```

2. `cd` into the project folder:

    ```bash
    cd node-ngrok-demo
    ```

3. Install all dependencies:

    ```bash
    npm i
    ```

4. Run the server:

    ```bash
    node server.js
    ```

5. Expose the local server to the internet via ngrok:

    ```bash
    ngrok http http://localhost:5000
    ```

    Or simply:

    ```bash
    ngrok http 5000
    ```
