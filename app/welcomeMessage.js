export default function WelcomeMessage({ username, workSpace }) {
    return (
      <h3 className="mt-10 mb-2 text-4xl font-semibold text-white">
        {username && workSpace ? (
          <>
            {username}! welcome
          </>
        ) : (
          <>select the options</>
        )}
      </h3>
    );
  }
