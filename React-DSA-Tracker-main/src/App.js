import './App.css';
import Landing from './components/Landing';
import OneForAll from './topics/OneForAll';
import data from './data';
import Sidebar from './components/Sidebar';

function App() {

  const styles = {
    backgroundColor : "white"
  }

  return (
    <div className="App" id = "outer-container" style={styles}>
      <Sidebar pageWrapId={'home'} outerContainerId={'outer-container'} />
      <div id = "home">
        <Landing />
        <OneForAll topic = {data.Arrays} topicName = "Arrays" heading = "Arrays" />
        <OneForAll topic = {data.LinkedList} topicName = "LinkedList" heading = "Linked List" />
        <OneForAll topic = {data.LinkedListAndArrays} topicName = "LinkedListAndArrays" heading = "Linked List and Arrays" />
        <OneForAll topic = {data.GreedyAlgorithm} topicName = "GreedyAlgorithm" heading = "Greedy Algorithm" />
        <OneForAll topic = {data.Recursion} topicName = "Recursion" heading = "Recursion" />
        <OneForAll topic = {data.RecursionAndBacktracking} topicName = "RecursionAndBacktracking" heading = "Recursion And Backtracking" />
        <OneForAll topic = {data.BinarySearch} topicName = "BinarySearch" heading = "Binary Search" />
        <OneForAll topic = {data.Trie} topicName = "Trie" heading = "Trie" />
        <OneForAll topic = {data.StackAndQueue} topicName = "StackAndQueue" heading = "Stack And Queue" />
        <OneForAll topic = {data.String} topicName = "String" heading = "String" />
        <OneForAll topic = {data.BinaryTree} topicName = "BinaryTree" heading = "Binary Tree" />
        <OneForAll topic = {data.BinarySearchTree} topicName = "BinarySearchTree" heading = "Binary Search Tree" />
        <OneForAll topic = {data.Graphs} topicName = "Graphs" heading = "Graphs" />
        <OneForAll topic = {data.DynamicProgramming} topicName = "DynamicProgramming" heading = "Dynamic Programming" />
      </div>
  
    </div>
  );
}

export default App;
