import { ref, computed } from "vue";

export function useFormatDate(dateString) {
  const formattedDate = ref("");

  const formatDate = () => {
    const date = new Date(dateString.value);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    formattedDate.value = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  computed(formatDate);

  return {
    formattedDate,
  };
}
