const AvailabilityPage = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Title</h1>
        <a className="text-blue-500">Add Availability</a>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Start Date
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                End Date
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap">Data 1</td>
              <td className="px-6 py-4 whitespace-no-wrap">Data 2</td>
              <td className="px-6 py-4 whitespace-no-wrap">Data 2</td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <a className="text-blue-500 mr-2">Edit</a>
                <a className="text-blue-500">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AvailabilityPage;
