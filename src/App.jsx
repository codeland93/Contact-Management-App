import { ContactProvider } from './ContactContext';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import PostList from './PostList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Contact Management App</h1>
      <ContactProvider>
        <ContactList />
        <ContactDetails />
      </ContactProvider>

      <h1>Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
