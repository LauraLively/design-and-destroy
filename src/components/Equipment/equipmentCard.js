export default function EquipmentCard({ equipment }) {
    return (
      <li className="equipment-card">
        <hgroup>
          <h4>{equipment.name}</h4>
          <div><a href="{}">Learn more</a></div>
        </hgroup>
      </li>
    );
}