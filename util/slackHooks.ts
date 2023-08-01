
export async function hookVisit(page: string) {
    const now        = new Date().toISOString();
    const enabled    = process.env.NEXT_PUBLIC_SLACK_WEBHOOK_ENABLE == "true" || false;
    const webhookUrl = process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || null;
    
    const client = await fetch('http://ip-api.com/json')
    .then(response => response.json())
    .then(data => data)
    .catch(err =>console.log(err));

    const message    = `Client form ${client.country} with Address IP:"${client.query}" visited the ${page} page of your website on ${now.split("T")[0]} at ${now.split("T").pop()?.split(".")[0]}`;    
    
    if(enabled && webhookUrl) {
        fetch(webhookUrl, {method: "POST", body: JSON.stringify({"text": message})})
    }

    
}