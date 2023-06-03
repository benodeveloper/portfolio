
export function hookVisit(page: string) {
    const now = new Date().toISOString();
    const message = `Someone visited the ${page} page of your website on ${now.split("T")[0]} at ${now.split("T").pop()?.split(".")[0]}`;
    fetch(`https://hooks.slack.com/services/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`, {method: "POST", body: JSON.stringify({"text": message})})
}