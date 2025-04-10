window.setJsonLd = (jsonLd) => {
    let existing = document.getElementById('json-ld');
    if (existing) {
        existing.remove();
    }
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'json-ld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
};
