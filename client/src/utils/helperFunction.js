function formatDate(isoString) {
    // Create a new Date object from the ISO string
    const date = new Date(isoString);
    
    // Options for toLocaleDateString to get the desired format
    const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    };
    
    // Format the date to the desired format
    const formattedDate = date.toLocaleDateString('en-US', options);
    
    return formattedDate;
  }
// function to truncate string 
function truncateString(input, maxLength) {
  if (input.length <= maxLength) {
    return input;
  }
  return input.slice(0, maxLength - 3) + '...';
}
  export {
    formatDate,
    truncateString,
  }