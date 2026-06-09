function AnnouncementBar() {
  return (
    <div className="bg-red-500 text-white text-center py-2 text-sm">
      <p>
        FREE SHIPPING on orders over $50 | Code:{" "}
        <strong>SAVE10</strong> for 10% off |{" "}
        <a href="#" className="font-bold underline">
          Learn More
        </a>
      </p>
    </div>
  );
}

export default AnnouncementBar;