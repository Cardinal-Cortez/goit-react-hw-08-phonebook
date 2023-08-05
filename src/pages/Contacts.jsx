import { Input } from "components/Input";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../Redux/contacts/operations";
import { selectError, selectIsLoading } from "../Redux/contacts/selectors";

const Contacts = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error}</p>}
      {!error && <Input />}
    </>
  );
};
export default Contacts;