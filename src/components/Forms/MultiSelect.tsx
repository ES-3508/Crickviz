import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

interface Option {
  value: string;
  text: string;
  selected: boolean;
}

interface DropdownProps {
  // id: string;
  options: Option[];
}

const MultiSelect: React.FC<DropdownProps> = ({ options }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLDivElement>(null);

  const open = () => {
    setShow(true);
  };

  const isOpen = () => {
    return show;
  };

  const select = (value: string) => {
    if (!selected.includes(value)) {
      setSelected([...selected, value]);
    }
  };

  const remove = (value: string) => {
    setSelected(selected.filter((item) => item !== value));
  };

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (
        !show ||
        dropdownRef.current.contains(target as Node) ||
        trigger.current?.contains(target as Node)
      ) return;
      setShow(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [show]);

  return (
    <div className="relative z-50">
      <div>
        <div className="flex flex-col items-center">
          <input name="values" type="hidden" value={selected.join(',')} />
          <div className="relative z-20 inline-block w-full">
            <div className="relative flex flex-col items-center">
              <div ref={trigger} onClick={open} className="w-full">
                <div className="mb-2 flex rounded border border-blue-300 py-2 pl-3 pr-3 outline-none transition focus:border-blue-200 active:border-blue-200 dark:border-form-strokedark dark:bg-form-input">
                  <div className="flex flex-auto flex-wrap gap-3">
                    {selected.map((value, index) => (
                      <div
                        key={index}
                        className="my-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-blue-500 px-2.5 py-1.5 text-sm font-medium text-white dark:bg-white dark:text-black"
                        onClick={() => remove(value)}
                      >
                        <div className="max-w-full flex-initial">
                          {options.find((opt) => opt.value === value)?.text}
                        </div>
                        <div className="flex flex-auto flex-row-reverse">
                          <div className="cursor-pointer pl-2">
                            <svg
                              className="fill-current"
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                    {selected.length === 0 && (
                      <div className="flex-1">
                        <input
                          placeholder="Select an option"
                          readOnly
                          onClick={open}
                          className="h-full w-full appearance-none bg-transparent p-1 px-2 outline-none"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full px-4">
                <div
                  className={`max-h-select absolute top-full left-0 z-40 w-full overflow-y-auto rounded bg-white shadow dark:bg-form-input ${
                    isOpen() ? '' : 'hidden'
                  }`}
                  ref={dropdownRef}
                  onFocus={() => setShow(true)}
                  onBlur={() => setShow(false)}
                >
                  <div className="flex w-full flex-col">
                    {options.map((option, index) => (
                      <div key={index}>
                        <div
                          className="w-full cursor-pointer rounded-t border-b border-stroke hover:bg-primary/5 dark:border-form-strokedark"
                          onClick={() => select(option.value)}
                        >
                          <div
                            className={`relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 ${
                              selected.includes(option.value) ? 'border-primary' : ''
                            }`}
                          >
                            <div className="flex w-full items-center">
                              <div className="mx-2 leading-6">
                                {option.text}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
