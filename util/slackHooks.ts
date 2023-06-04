
export async function hookVisit(page: string) {
    const now        = new Date().toISOString();
    const enabled    = process.env.NEXT_PUBLIC_SLACK_WEBHOOK_ENABLE == "true" || false;
    const webhookUrl = process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || null;
    
    const clientIP = await fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => data.ip);
    const message    = `IP_ADD: ${clientIP} visited the ${page} page of your website on ${now.split("T")[0]} at ${now.split("T").pop()?.split(".")[0]}`;    
 
    if(enabled && webhookUrl) {
        fetch(webhookUrl, {method: "POST", body: JSON.stringify({"text": message})})
    } else {
        console.log(message);
        
    }

    
}