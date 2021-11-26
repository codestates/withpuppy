import LogoutModal from '.';

function Index({ onHandleLogoutOpen }) {
  return (
    <LogoutModal onHandleOpenState={onHandleLogoutOpen}>
      <div>hi</div>
    </LogoutModal>
  );
}

export default Index;
