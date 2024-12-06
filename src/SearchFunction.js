
export const handleSearch = (searchQuery, events, users) => {
    console.log("Search Query:", searchQuery);

    if (searchQuery.trim() === '') {
        console.log("Search query is empty");
        return { eventsResult: [], usersResult: [] };
    }

   
    const eventsResult = events.filter(event =>
        event?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    
    const usersResult = users.filter(user =>
        (user?.firstName?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user?.lastName?.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    console.log("Filtered Events:", eventsResult);
    console.log("Filtered Users:", usersResult);

    
    return { eventsResult, usersResult };
};


