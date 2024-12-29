function dateCambio ( dateold) {
    const blogDate = new Date(dateold);

    const shortOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };

    return blogDate.toLocaleDateString('nl-NL',shortOptions);

}

export default dateCambio;