import type { BoxItemType } from "../routes/box";

type BoxItemProps = {
  item: BoxItemType;
  handleContentInput: (
    boxItem: BoxItemType,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  handleRemoveContent: (boxItem: BoxItemType) => void;
};

export const BoxItem = ({
  item,
  handleContentInput,
  handleRemoveContent,
}: BoxItemProps) => {
  return (
    <div key={item.id} className="form-row">
      <label>
        Content
        <input
          type="text"
          value={item.name}
          onChange={(e) => handleContentInput(item, e)}
        />
      </label>
      <button className="delete-item" onClick={() => handleRemoveContent(item)}>
        X
      </button>
    </div>
  );
};
