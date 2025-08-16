export default function IframeMaps() {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.3242695641604!2d-45.79901288502172!3d-23.293292084828796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc9d91f3b1c8e7%3A0x5dc3161ebcf4f640!2sEstrada%20do%20Rio%20Manso%2C%20455%20-%20Monteiro%20Lobato%2C%20SP%2C%2012250-000!5e0!3m2!1spt-BR!2sbr!4v1692304028382!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0, position: "absolute", top: 0, left: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
