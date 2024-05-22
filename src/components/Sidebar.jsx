
const Sidebar = () => {
  return (
    <div className="flex">
      <div className="w-1/3 bg-gray-200 p-4">
        <h2 className="text-xl  mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2">Item 1</li>
          <li className="mb-2">Item 2</li>
          <li className="mb-2">Item 3</li>
          <li className="mb-2">Item 4</li>
        </ul>
      </div>

      <div className="w-2/3 bg-white p-4">
        <h2 className="text-xl  mb-4">Main Content</h2>
        <p>This is the main content area.</p>
      </div>
    </div>
  );
};

export default Sidebar;
