import { useState } from "react";
import type { Pedido } from "../model/Pedido";
import { StatusPedido } from "../model/StatusPedido";

interface Props {
    pedido: Pedido;
    onStatusChange: (id: number, status: StatusPedido) => void;
}

const statusBadge: Record<StatusPedido, string> = {
    [StatusPedido.RECEBIDO]: "bg-blue-100 text-blue-700",
    [StatusPedido.EM_PREPARO]: "bg-amber-100 text-amber-700",
    [StatusPedido.SAIU_PARA_ENTREGA]: "bg-purple-100 text-purple-700",
    [StatusPedido.ENTREGUE]: "bg-green-100 text-green-700",
    [StatusPedido.CANCELADO]: "bg-red-100 text-red-700",
};

export default function PedidoCard({ pedido, onStatusChange }: Props) {

    const [mostrarItens, setMostrarItens] = useState(false);

    const total = pedido.itens?.reduce(
        (soma, item) => soma + item.preco * item.quantidade,
        0
    ) ?? 0;

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-4 hover:shadow-md transition-shadow">

            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    Pedido #{pedido.id}
                </h3>

                {pedido.status && (
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusBadge[pedido.status]}`}>
                        {pedido.status}
                    </span>
                )}
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-600 mb-4">
                <p><span className="font-medium text-gray-900">Cliente:</span> {pedido.cliente?.nome}</p>
                <p><span className="font-medium text-gray-900">Cidade:</span> {pedido.endereco?.cidade}</p>
                <p><span className="font-medium text-gray-900">Bairro:</span> {pedido.endereco?.bairro}</p>
                <p><span className="font-medium text-gray-900">Rua:</span> {pedido.endereco?.rua}</p>
                <p><span className="font-medium text-gray-900">Número:</span> {pedido.endereco?.numero}</p>
            </div>

            <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">
                        <span className="font-medium text-gray-900">{pedido.itens?.length}</span> item(ns)
                    </span>

                    <button
                        type="button"
                        onClick={() => setMostrarItens(!mostrarItens)}
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                        {mostrarItens ? "Ocultar itens" : "Ver itens"}
                    </button>
                </div>

                {mostrarItens && (
                    <ul className="space-y-1.5 mb-2">
                        {pedido.itens?.map((item, index) => (
                            <li key={index} className="flex justify-between text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
                                <span>{item.produto} <span className="text-gray-400">× {item.quantidade}</span></span>
                                <span className="font-medium text-gray-900">
                                    R$ {(item.preco * item.quantidade).toFixed(2)}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <span className="text-sm font-semibold text-gray-900">
                        Total: R$ {total.toFixed(2)}
                    </span>

                    <select
                        value={pedido.status}
                        onChange={(e) =>
                            onStatusChange(pedido.id!, e.target.value as StatusPedido)
                        }
                        className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        {Object.values(StatusPedido).map((status) => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}