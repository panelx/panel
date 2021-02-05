import { WidgetDefinition } from "./server";

export function getKey(index: number, widget: WidgetDefinition): string {
  const title = widget.title.replace(/[^a-z0-9]/gi,'').toLocaleLowerCase();
  return `${index}_${title}`;
}