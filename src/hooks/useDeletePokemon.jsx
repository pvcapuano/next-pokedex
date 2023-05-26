import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { toast } from "react-toastify";

const useDeletePokemon = () => {
  const handleDeleteAvi = async (id) => {
    const ref = doc(db, "avistados", id);
    toast.error("Pokemon removido dos avistados.");
    await deleteDoc(ref);
  };

  const handleDeleteFav = async (id) => {
    const ref = doc(db, "favoritos", id);
    toast.error("Pokemon removido dos favoritos.");
    await deleteDoc(ref);
  };

  return { handleDeleteAvi, handleDeleteFav };
};

export default useDeletePokemon;
