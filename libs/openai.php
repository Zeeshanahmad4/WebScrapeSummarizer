<?php
function processWithOpenAI($content) {
    $openai_api_key = "YOUR_OPENAI_API_KEY";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.openai.com/v1/engines/davinci/completions");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["prompt" => $content]));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $openai_api_key,
        'Content-Type: application/json'
    ]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $response = curl_exec($ch);
    curl_close($ch);
    $decodedResponse = json_decode($response, true);
    return $decodedResponse['choices'][0]['text'];
}
?>
