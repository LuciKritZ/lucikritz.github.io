export const formatDateForExperience = (date: string): string => {
  const formattedDate = new Date(date);
  return `${formattedDate.getMonth()}/${formattedDate.getFullYear()}`;
};
