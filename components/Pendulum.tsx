const Pendulum = () => {
  return (
    <div className="m-4 flex pl-12 pt-12">
      <div className="h-3 w-3 rounded-full bg-slate-800 animate-leftAnimation" />
      <div className="h-3 w-3 rounded-full bg-slate-800" />
      <div className="h-3 w-3 rounded-full bg-slate-800" />
      <div className="h-3 w-3 rounded-full bg-slate-800 animate-rightAnimation" />
    </div>
  );
};

export default Pendulum;
